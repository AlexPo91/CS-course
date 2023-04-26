import { keyCreaction } from '../utils/utils';

keyCreaction;

function collapseRec(obj, keyStr = '', result = {}) {
  if (typeof obj !== 'object' || obj === null) {
    result[keyStr] = obj;
  }

  for (let key in obj) {
    collapseRec(obj[key], keyCreaction(keyStr, key), result);
  }
  return result;
}

const obj = {
  a: {
    b: [1, 2],
    '': { c: 2 },
  },
};

console.log(collapseRec(obj));
