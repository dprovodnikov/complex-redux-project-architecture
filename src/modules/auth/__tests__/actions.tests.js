import initActions from '../actions';
import types from '../types';

describe('auth actions test suit', () => {
  let actions;
  let services;
  let dispatch;

  beforeEach(() => {
    dispatch = jest.fn();
    services = {
      auth: {
        login: jest.fn(() => Promise.resolve()),
      },
    };
    actions = initActions(types, services);
  });

  test('initActions is a function', () => {
    expect(initActions).toBeInstanceOf(Function);
  });

  test('initActions returns an object', () => {
    expect(actions).toBeInstanceOf(Object);
  });

  test('actions contain "login" action', () => {
    expect(actions.login).toBeInstanceOf(Function);
  });

  test('"login" action invokes auth.login service method', () => {
    let email = 'email';
    actions.login(email)(dispatch);
    expect(services.auth.login).toHaveBeenCalledWith(email);
  });

  test('"login" action dispatches login attempt', () => {
    actions.login()(dispatch);
    expect(dispatch).toHaveBeenCalledWith({ type: types.LOGIN_ATTEMPT });
  });

  test('"login" action dispatches login failure', (done) => {
    actions = initActions(types, {
      auth: {
        login: jest.fn(() => Promise.reject()),
      },
    });

    actions.login()(dispatch).then(() => {
      expect(dispatch).toHaveBeenCalledWith({ type: types.LOGIN_FAILURE });
      done();
    });
  });
});
