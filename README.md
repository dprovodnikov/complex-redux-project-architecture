# Redux with services

This is an architecture built ontop of the default redux data flow with an additional layer of business logic. It brings a layer to place your services at and increases testability of redux thunks/reducers **up to 100%**.

### Intent
Redux does not give us a defined place to store business logic. This architecture brings a new layer for that purpose and increases testability of redux pieces (actions, reducers) by introducting dependency injection.

### Idea
The business logic layer is presented by services. It's kind of similar to what we have in Angular. It's the place where components and redux actions move the logic to, in order to focus on their main purpose.

### Architecture
It consists of three main concepts: modules, services and context. Let's go through all of them to get a better understanding.

##### Modules
Modules are a gathering of redux-related stuff. A module consists of two main pieces: actions and reducers. Each module is a result of a function, which brings a posibility to inject services into them. Modules can depend on other modules as well.

There's a module entry point.
```javascript
// src/modules/module/index.js
import initActions from './actions';
import initReducer from './reducer';
import types from './types';

const configureAuthModule = (services) => {
  const actions = initActions(types, {
    auth: services.authService,
  });

  const reducer = initReducer(types, {
    auth: services.authService,
  });

  return { actions, reducer, types };
};

export default configureAuthModule;
```
This is a function where services get injected into actions and reducers. You can see that types are injected too. Such injection makes it easier to test actions/reducers after all as it's possible to mock everything.

Actions are returned from the *initActions* function here:
```javascript
// src/modules/module/actions.js
const initActions = (types, services) => {
  // make use of services here

  return Object.freeze({
    // include all public action creators here
  });
};
```
Reducer is basically the same:
```javascript
// src/modules/module/reducer.js
const initReducer = (types, services) => {
  const INITIAL_STATE = {
    // may make use of services
  };
  
  const reducer = (state = INITIAL_STATE, action) => {
    // switch over types here
  };

  return reducer;
};

export default initReducer;
```

Injection of types allows to merge the module's types with some other module's types. It's a pretty common situation when modules depend on each other.

As you see it's almost the same redux you are used to. The only difference is -> actions and reducers are returned from functions.

##### Services
It's completely up to you when it comes to organizing services. The only thing to consider here is that you have to provide a function that returns service instances that are going to be injected in modules after all.

```javascript
// src/services/index.js
const configureServices = async () => {
  const userService = UserService();
  const authService = AuthService();

  return { userService, authService };
};
```
That is what services entry point looks like. Services get initialized here and then get returned for the further usage.

##### Context
Context is a place where all globally available objects can be access from all over the application. Services and actions get registered to context so components can access them as they need them.

Context consists of two (or more) registries. One for actions and one for services. Here's what context entry point looks like:
```javascript
// src/context/index.js
import actions, { registerActions } from './actionRegistry';
import services, { registerServices } from './serviceRegistry';

export {
  actions, services,
};

export default {
  actions,
  registerActions,
  services,
  registerServices,
};
```

I used a third-party package for the registry implementation.
```javascript
// src/context/actionRegistry.js
import createRegistry from 'mag-service-registry';
const registry = createRegistry();
export const registerActions = registry.register;
export default registry.exposeRegistered();
```

It's pretty much the same code for services as well.

Context allows components to access actions like this:
```javascript
// src/components/TodoList/index.js
import { actions } from '../../context';
...
class TodoList extends Component {
  ...
}
...
export default connect(..., { fetchTodos: actions.todos.fetch })(TodoList);
```

This is how services and actions get registered into context. It happens in application's entry point.

```javascript
// src/index.js

import context from './context';
import configureServices from './services';
import configureModules from './modules';
...
(async function init() {
  const services = await configureServices();
  // inject services into modules here
  const { actions } = await configureModules(services);
  
  context.registerServices(services);
  context.registerActions(actions);
  ...
})();
```

### Delaying DOM rendering
There is something else you need to understand. Since services are configured asynchronously we have to wait until they're done before we can render anything. This is just to prevent components from using services that aren't ready yet. It's not enough just to delay the *ReactDOM.render* call. We should delay the import of the Root component. Dynamic imports is the solution here.

```javascript
const loadRoot = async () => {
  const module = await import('./components/Root');
  return module.default;
};

const render = async () => {
  const target = document.getElementById('root');
  const Root = await loadRoot();

  ReactDOM.render(<Root />, target);
};

(async function init() {
  ...
  render();
})();
```

That is how I integrated services into redux flow. I am grateful for any feedback. You are welcome to contribute!
