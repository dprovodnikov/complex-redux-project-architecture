import services, { registerServices } from '../serviceRegistry';

describe('service registry test suit', () => {
  test('registerServices is a function', () => {
    expect(registerServices).toBeInstanceOf(Function);
  });

  test('services is an object', () => {
    expect(services).toBeInstanceOf(Object);
  });

  test('registered services are available on the "services" object', () => {
    const input = { service: () => {} };
    registerServices(input);
    expect(services.service).toBe(input.service);
  });
});
