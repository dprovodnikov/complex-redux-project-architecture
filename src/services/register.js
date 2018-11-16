import { populateServiceRegistry } from '../context/serviceRegistry';

const registerServices = async (services) => {
  return populateServiceRegistry(register => register(services));
};

export default registerServices;
