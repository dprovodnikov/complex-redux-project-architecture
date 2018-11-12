import React from 'react';
import ReactDOM from 'react-dom';
import { populateServiceRegistry } from './context/serviceRegistry';
import configureModules from './modules/configure';
import registerServices from './services/register';

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
  const services = await populateServiceRegistry(registerServices);
  const store = await configureModules(services); 

  render(store);
})();
