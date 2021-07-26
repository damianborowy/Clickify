const codeString = `const foo = 5;

function aaa(a, b, c) {
  return a + b + c + foo;
}`;

export default [...new Array(5)].map((_el, index) =>
    codeString.repeat(index + 1)
);
