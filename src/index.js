import React from 'react';
import ReactDOM from 'react-dom';
import configureModules from './modules';
import configureServices from './services';
import context from './context';

const loadRoot = async () => {
  const module = await import('./components/Root');
  return module.default;
};

const render = async (store) => {
  const target = document.getElementById('root');
  const Root = await loadRoot();

  ReactDOM.render(<Root store={store} />, target);
};

(async function init() {
  const services = await configureServices();
  const store = await configureModules(services); 

  context.registerServices(services);

  render(store);
})();
