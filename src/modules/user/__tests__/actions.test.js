import initActions from '../actions';
import types from '../types';

describe('user actions test suit', () => {
  let services;
  let actions;
  let dispatch;

  beforeEach(() => {
    services = {
      user: {
        getUsers: jest.fn(() => Promise.resolve()),
        createUser: jest.fn(name => Promise.resolve({ id: 1, name })),
        removeUser:jest.fn(() => Promise.resolve()),
      },
    };
    actions = initActions(types, services);
    dispatch = jest.fn();
  });

  test('initActions is a function', () => {
    expect(initActions).toBeInstanceOf(Function);
  });
  
  test('actions is an object', () => {
    expect(actions).toBeInstanceOf(Object);
  });

  test('actions to contain fetchUsers action', () => {
    expect(actions.fetchUsers).toBeInstanceOf(Function);
  });

  test('actions to contain createUser action', () => {
    expect(actions.createUser).toBeInstanceOf(Function);
  });

  test('actions to contain removeUser action', () => {
    expect(actions.removeUser).toBeInstanceOf(Function);
  });

  test('fetchUsers action invokes getUsers service method', () => {
    actions.fetchUsers()(dispatch);
    expect(services.user.getUsers).toHaveBeenCalled();
  });

  test('fetchUsers action dispatches fetch success', (done) => {
    actions.fetchUsers()(dispatch).then(() => {
      expect(dispatch).toHaveBeenCalledWith({ type: types.FETCH_USERS_SUCCESS });
      done();
    });
  });

  test('createUser action invokes createUser service method', () => {
    const name = 'John Doe';

    actions.createUser(name)(dispatch);
    expect(services.user.createUser).toHaveBeenCalledWith(name);
  });

  test('createUser action dispatches create success', (done) => {
    const name = 'John Doe';

    actions.createUser(name)(dispatch).then(() => {
      const payload = { id: 1, name };
      const type = types.CREATE_USER_SUCCESS;

      expect(dispatch).toHaveBeenCalledWith({ type, payload });
      done();
    });
  });

  test('removeUser action invokes removeUser service method', () => {
    const user = { id: 1 };

    actions.removeUser(user)(dispatch);
    expect(services.user.removeUser).toHaveBeenCalledWith(user);
  });

  test('removeUser actions dispatches remove success', (done) => {
    const user = { id: 1 };
    
    actions.removeUser(user)(dispatch).then(() => {
      const payload = user.id;
      const type = types.REMOVE_USER_SUCCESS;

      expect(dispatch).toHaveBeenCalledWith({ type, payload });
      done();
    });
  });
});
