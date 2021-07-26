import { memo } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import javascriptScripts from "../../../scripts/javascriptScripts";
import Marquee from "react-marquee-master";

type CodeMarqueeProps = {
    language: "javascript";
};

const CodeMarquee = ({ language }: CodeMarqueeProps) => (
    <Marquee
        marqueeItems={javascriptScripts.map((code) => (
            <SyntaxHighlighter key={code} language="javascript" style={docco}>
                {code}
            </SyntaxHighlighter>
        ))}
        delay={15}
        height={300}
    />
);

export default memo(CodeMarquee);
