// 1
const reg = /^[\w_$]+$/i;

console.log(reg.test('привет'));

// 2
'762120,0,22;763827,0,50;750842,0,36;749909,0,95;755884,0,41;'.split(/,\d+,\d+;/).filter(Boolean);

// 3
const reg = /"([^"])+": ([^,}]+)/g;
const result = [...'{"a": 1, "b": "2"}'.matchAll(reg)];

console.log(result); // [['"a": 1', 'a', '1'], ['"b": "2"', 'b', '"2"']]

// 4

const calc = (str) => {
  const reg = /[\(|\d+].+/g;
  return str.replace(reg, (str) => eval(str));
};

console.log(
  calc(`Какой-то текст (10 + 15 - 24) ** 2
    Еще какой то текст 2 * 10`)
);

//5
const format = (string, obj) => {
  const reg = /\${(.+?)}/gm;
  return string.replace(reg, (_, key) => obj[key]);
};

console.log(format('Hello, ${user}! Your age is ${age}.', { user: 'Bob', age: 10 }));
