const extract = (modules, prop) => {
  return Object.entries(modules)
    .map((entry) => {
      const [key, module] = entry;

      return { [key]: module[prop] };
    })
    .reduce((result, entry) => {
      return ({ ...result, ...entry });
    }, {});
};

export const extractActions = modules => extract(modules, 'actions');
export const extractReducers = modules => extract(modules, 'reducer');
