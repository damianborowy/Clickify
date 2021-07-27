const code1 = `const foo = 5;

function sum(a, b, c) {
  return a + b + c + foo;
}`;

const code2 = `const fetchData = async () => {
  const data = await fetch("https://foo.com")
    .then((res) => res.json())
    .catch(console.log);

  this.setState({data});
}`;

const code3 = `const fooMap = new MapWithRandomData();

for (let [key, value] of fooMap) {
  document.getElementById(key)?.innerHTML = value;
}`;

const code4 = `function makeid() {
  let text = "";
  let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

console.log(makeid());`;

const code5 = `function getRandomString(length) {
  let randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';

  for (var i = 0; i < length; i++) {
      result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
  }

  return result;
}`

const javascriptCode = [code1, code2, code3, code4, code5];

export default javascriptCode;
