import initReducer from '../reducer';
import types from '../types';

describe('auth reducer test suit', () => {
  let services;
  let reducer;

  beforeEach(() => {
    services = {
      auth: {
        isAuthenticated: jest.fn(() => false),
      },
    };
    reducer = initReducer(types, services);
  });

  test('initReducer is a function', () => {
    expect(initReducer).toBeInstanceOf(Function);
  });

  test('reducer is a function', () => {
    expect(reducer).toBeInstanceOf(Function);
  });

  test('returns an object by default', () => {
    const state = reducer(undefined, {});
    expect(state).toBeInstanceOf(Object);
  });

  test('uses auth service to compose initial state', () => {
    const state = reducer(undefined, {});
    const expectedState = {
      isAuthenticated: services.auth.isAuthenticated(),
      isAuthenticating: false,
      error: null,
    };
    expect(state).toEqual(expectedState);
  });

  test('turns on progress indicator on login attempt', () => {
    const action = { type: types.LOGIN_ATTEMPT };
    const state = reducer(undefined, action);
    const expectedState = {
      isAuthenticated: false,
      isAuthenticating: true,
      error: null,
    };
    expect(state).toEqual(expectedState);
  });

  test('turns off progress indicator and changes auth state to true', () => {
    const action = { type: types.LOGIN_SUCCESS };
    const state = reducer(undefined, action);
    const expectedState = {
      isAuthenticated: true,
      isAuthenticating: false,
      error: null,
    };
    expect(state).toEqual(expectedState);
  });

  test('turns off progress indicator and sets error to payload', () => {
    const err = {};
    const action = { type: types.LOGIN_FAILURE, payload: err };
    const state = reducer(undefined, action);
    const expectedState = {
      isAuthenticated: false,
      isAuthenticating: false,
      error: err,
    };
    expect(state).toEqual(expectedState);
  });
});
