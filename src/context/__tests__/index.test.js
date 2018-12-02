import context, { actions, services } from '..';

describe('context entry point test suit', () => {
  test('exports actions as a named export', () => {
    expect(actions).toBeInstanceOf(Object);
  });

  test('exports services as a named export', () => {
    expect(services).toBeInstanceOf(Object);
  });

  test('exports context as default', () => {
    expect(context).toBeInstanceOf(Object);
  });

  test('context contains "registerActions" method', () => {
    expect(context.registerActions).toBeInstanceOf(Function);
  });

  test('context contains "registerServices" method', () => {
    expect(context.registerServices).toBeInstanceOf(Function);
  });
});
