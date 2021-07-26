const codeString = `const foo = 5;

function aaa(a, b, c) {
  return a + b + c + foo;
}`;

export default [...new Array(100)].map((_el, index) => index.toString());
