import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { populateServiceRegistry } from './context/serviceRegistry';
import { populateActionRegistry } from './context/actionRegistry';
import configureModules from './modules/configure';
import configureStore from './configureStore';
import registerServices from './services/register';

const loadRoot = async () => {
  const module = await import('./components/Root');
  return module.default;
};

const renderToDOM = async (store) => {
  const target = document.getElementById('root');
  const Root = await loadRoot();

  ReactDOM.render(
    <Provider store={store}>
      <Root />
    </Provider>,
    target,
  );
};

async function init() {
  const services = await populateServiceRegistry(registerServices);
  const { actions, reducers } = await configureModules(services);

  await populateActionRegistry(register => register(actions));

  renderToDOM(configureStore(reducers));
};

init();
