import uniqid from 'uniqid';

const User = function (name) {
  const id = uniqid();

  return Object.freeze({
    id, name,
  });
}

export default User;
