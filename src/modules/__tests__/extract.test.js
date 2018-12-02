import {
  extract,
  extractActions,
  extractReducers,
  ACTIONS_KEY,
  REDUCER_KEY,
} from '../extract';

describe('extract test suit', () => {
  test('is a function', () => {
    expect(extract).toBeInstanceOf(Function);
  });

  test('returns null when modules are missing', () => {
    expect(extract()).toBe(null);
  });

  test('returns null when extracting key is missing', () => {
    expect(extract({})).toBe(null);
  });

  test('returns null if the first arg is not an object', () => {
    expect(extract('')).toBe(null);
  });

  test('returns null if key is not a string', () => {
    expect(extract({}, 0)).toBe(null);
  });

  test('extracts properly by key', () => {
    const input = {
      first: { actions: {} },
      second: { actions: {} },
    };

    const expectedOutput = {
      first: input.first.actions,
      second: input.second.actions,
    };

    const output = extract(input, 'actions');

    expect(output).toEqual(expectedOutput);
  });
});

describe('extractActions test suit', () => {
  test('is a function', () => {
    expect(extractActions).toBeInstanceOf(Function);
  });

  test('extracts actions properly', () => {
    const input = {
      first: { [ACTIONS_KEY]: {} },
      second: { [ACTIONS_KEY]: {} },
    };

    const expectedOutput = {
      first: input.first[ACTIONS_KEY],
      second: input.second[ACTIONS_KEY],
    };

    const output = extractActions(input);

    expect(output).toEqual(expectedOutput);
  })

  test('extracts actions as empty objects i', () => {
    const input = {
      first: {},
      second: {},
    };

    expect(extractActions(input)).toEqual({});
  })
});

describe('extractReducers test suit', () => {
  test('is a function', () => {
    expect(extractActions).toBeInstanceOf(Function);
  });

  test('extracts reducers properly', () => {
    const input = {
      first: { [REDUCER_KEY]: {} },
      second: { [REDUCER_KEY]: {} },
    };

    const expectedOutput = {
      first: input.first[REDUCER_KEY],
      second: input.second[REDUCER_KEY],
    };

    expect(extractReducers(input)).toEqual(expectedOutput);
  })

  test('extracts actions as empty objects i', () => {
    const input = {
      first: {},
      second: {},
    };

    expect(extractReducers(input)).toEqual({});
  })
});