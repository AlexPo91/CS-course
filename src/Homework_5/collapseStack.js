import { keyCreaction } from '../utils/utils';

keyCreaction;

function collapseStack(obj) {
  const stack = [[obj]];
  const result = {};

  while (stack.length > 0) {
    const [value, key] = stack.pop();
    if (typeof value !== 'object' || value === null) {
      result[key] = value;
      continue;
    }
    const keys = Object.keys(value);
    for (let i = keys.length - 1; i >= 0; i--) {
      const currKey = keys[i];

      stack.push([value[currKey], keyCreaction(key, currKey)]);
    }
  }
  return result;
}

const obj = {
  a: {
    b: [1, 2],
    '': { c: 2 },
  },
};

console.log(collapseStack(obj));
