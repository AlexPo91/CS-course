function brackets(string: string) {
  if (typeof string !== 'string') {
    throw new Error("It's not a string");
  }
  const stack = [];
  for (let i = 0; i < string.length; i++) {
    switch (string[i]) {
      case '{':
      case '(':
      case '[':
        stack.push(string[i]);
        break;
      case '}':
      case ')':
      case ']':
        if (stack.length !== 0) {
          const lastElement = stack.pop();
          const currElement = string[i];
          if (
            (currElement === '}' && lastElement !== '{') ||
            (currElement === ')' && lastElement !== '(') ||
            (currElement === ']' && lastElement !== '[')
          ) {
            return false;
          }
        } else {
          return false;
        }
        return true;
      default:
        break;
    }
  }
}

export { brackets };
