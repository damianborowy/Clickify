import { memo } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Marquee from "react-marquee-master";
import { useMemo } from "react";
import shuffle from "../../../utils/shuffle";
import languageFiles from "../../../constants/languageFiles";
import styles from "./style.module.scss";

type CodeMarqueeProps = {
  languages: (keyof typeof languageFiles)[];
};

const CodeMarquee = ({ languages }: CodeMarqueeProps) => {
  const shuffledLanguageFiles = useMemo(() => {
    const newLanguages = languages
      .map((language) =>
        languageFiles[language].map((code) => ({ code, language }))
      )
      .flat();

    shuffle(newLanguages);

    return newLanguages;
  }, [languages]);

  return (
    <div className={styles.codeWrapper}>
      <Marquee
        marqueeItems={shuffledLanguageFiles.map((codeChunk) => (
          <SyntaxHighlighter
            key={codeChunk.code}
            language={codeChunk.language}
            style={docco}
            wrapLines
          >
            {codeChunk.code}
          </SyntaxHighlighter>
        ))}
        delay={15}
        height={300}
      />
    </div>
  );
};

export default memo(CodeMarquee);
