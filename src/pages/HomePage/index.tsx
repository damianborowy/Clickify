import Marquee from "react-marquee-master";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useRecoilState } from "recoil";
import { fooAtom } from "../../store/foo";

const codeString = `
const foo = 5;

function aaa(a, b, c) {
  return a + b + c + foo;
}
`;

const HomePage = () => {
    const [foo, setFoo] = useRecoilState(fooAtom);

    return (
      <Marquee
        marqueeItems={[...new Array(5)].map(() => (
          <SyntaxHighlighter language="javascript" style={docco}>
            {codeString}
          </SyntaxHighlighter>
        ))}
        height={300}
        delay={30}
      />
    );
};

export default HomePage;