import { populateServiceRegistry } from '../context/serviceRegistry';
import registerServices from './register';

const configureServices = async () => {
  return populateServiceRegistry(registerServices);
};

export default configureServices;

