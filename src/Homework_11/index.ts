function isDigit(string: string) {
  if (typeof string !== 'string') {
    throw new Error('not sting');
  }
  if (string.length === 0) {
    throw new Error('String is Empty');
  }
  if (typeof Number(string) === 'number' && !isNaN(Number(string))) {
    return true;
  }
  for (const char of string) {
    const charCodePoint = char.codePointAt(0);
    if (charCodePoint! < 0x2150 || charCodePoint! > 0x218b) {
      return false;
    }
    return true;
  }
  return false;
}

console.log(isDigit('ⅻ'));
