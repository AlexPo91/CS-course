export function keyCreaction(str, key) {
  return str ? `${str}.${key}` : key;
}

export const getStringHash = (string, arraySize) =>
  string.split('').reduce((acc, curr) => (acc * 27 + curr.charCodeAt(0)) & arraySize, 0);

export const getObjectHash = (object) => {
  if (object.hashCode !== undefined) {
    return object.hashCode;
  } else {
    object.hashCode = Math.floor(Math.random() * 2 ** 32 - 1);
    return object.hashCode;
  }
};

export const isPrime = (num) => {
  for (let i = 2; i ** 2 <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

export const getPrime = (min) => {
  let i = min + 1;
  while (!isPrime(i)) {
    i++;
  }
  return i;
};
