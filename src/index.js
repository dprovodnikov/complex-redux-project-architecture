import React from 'react';
import ReactDOM from 'react-dom';
import configureModules from './modules';
import registerServices from './services/register';
import { populateServiceRegistry } from './context/serviceRegistry';

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
