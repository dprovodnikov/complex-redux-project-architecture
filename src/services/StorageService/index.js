const Storage = function () {
  const getList = (key) => {
    const list = JSON.parse(localStorage.getItem(key));

    return list || [];
  };

  const setList = (key, list) => {
    if (!Array.isArray(list)) {
      return;
    }

    localStorage.setItem(key, JSON.stringify(list));
  };

  const append = (key, subList) => {
    const nextList = getList(key).concat(subList);

    setList(key, nextList);
  };

  const removeById = (key, id) => {
    const nextList = getList(key).filter(u => u.id !== id);

    setList(key, nextList);
  };

  const getById = (key, id) => {
    const unit = getList(key).find(u => u.id === id);

    return unit || null;
  };

  return Object.freeze({
    append, getList, setList, getById, removeById,
  });
};

export default Storage;
