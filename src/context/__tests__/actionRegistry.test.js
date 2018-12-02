import actions, { registerActions } from '../actionRegistry';

describe('action registry test suit', () => {
  test('registerActions is a function', () => {
    expect(registerActions).toBeInstanceOf(Function);
  });

  test('actions is an object', () => {
    expect(actions).toBeInstanceOf(Object);
  });

  test('registered actions are available on the "actions" object', () => {
    const input = { do: () => {} };
    registerActions(input);
    expect(actions.do).toBe(input.do);
  });
});
