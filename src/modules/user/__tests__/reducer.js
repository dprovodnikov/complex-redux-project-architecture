import initReducer from '../reducer';
import userTypes from '../types';
import authTypes from '../../auth/types';

describe('user reducer test suit', () => {
  const types = {
    ...userTypes,
    LOGOUT_SUCCESS: authTypes.LOGOUT_SUCCESS,
  };
  let reducer;

  beforeEach(() => {
    reducer = initReducer(types);
  });

  test('initReducer is a function', () => {
    expect(initReducer).toBeInstanceOf(Function);
  });

  test('initReducer returns an function', () => {
    expect(reducer).toBeInstanceOf(Function);
  });

  test('produces initial state by default', () => {
    const state = reducer(undefined, {});
    const expectedState = { list: [] };

    expect(state).toEqual(expectedState);
  });

  test('sets list to payload on fetch success', () => {
    const list = [];
    const action = { type: types.FETCH_USERS_SUCCESS, payload: list };
    const state = reducer(undefined, action);
    const expectedState = { list };

    expect(state).toEqual(expectedState);
  });

  test('filters out the list on remove success', () => {
    let id = 1;
    const initialState = { list: [{ id }] };
    const action = {
      type: types.REMOVE_USER_SUCCESS,
      payload: id,
    };
    const expectedState = { list: [] };

    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  test('appends user on create success', () => {
    const user = { id: 1 };
    const action = {
      type: types.CREATE_USER_SUCCESS,
      payload: user,
    };
    const expectedState = { list: [user] };
    const state = reducer(undefined, action);

    expect(state).toEqual(expectedState);
  });

  test('resets list on logout success', () => {
    const action = { type: types.LOGOUT_SUCCESS };
    const initialState = { list: [{ id: 1 }] };
    const expectedState = { list: [] };
    const state = reducer(initialState, action);

    expect(state).toEqual(expectedState);
  });
});
