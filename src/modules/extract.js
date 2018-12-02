export const ACTIONS_KEY = 'actions';
export const REDUCER_KEY = 'reducer';

export const validateModules = (modules) => {
  return modules instanceof Object;
};

export const validateKey = (key) => {
  return typeof key === 'string';
};

export const extract = (modules, key) => {
  if (!validateModules(modules) || !validateKey(key)) {
    return null;
  }

  return Object.entries(modules)
    .filter(entry => !!entry[1][key])
    .map((entry) => {
      const [moduleName, module] = entry;

      return { [moduleName]: module[key] };
    })
    .reduce((output, entry) => {
      return ({ ...output, ...entry });
    }, {});
};

export const extractActions = modules => extract(modules, ACTIONS_KEY);
export const extractReducers = modules => extract(modules, REDUCER_KEY);
