import { memo } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Marquee from "react-marquee-master";
import { useMemo } from "react";
import shuffle from "../../../utils/shuffle";
import languageFiles from "../../../constants/languageFiles";
import styles from "./style.module.scss";
import { useRecoilValue } from "recoil";
import { delayAtom, selectedRealmAtom } from "../../../store/engine";
import { htmlUpgradesSelector } from "../../../store/frontend/html";
import { availableLanguages } from "../../../constants/languageFiles";

const CodeMarquee = () => {
  const delay = useRecoilValue(delayAtom);
  const languageUpgrades = useRecoilValue(htmlUpgradesSelector);
  const selectedRealm = useRecoilValue(selectedRealmAtom);

  const shuffledLanguageFiles = useMemo(() => {
    const newLanguages = languageUpgrades
      .filter((language) => language.level > 0)
      .map((language) =>
        languageFiles[selectedRealm].map((code) => ({
          code,
          language,
        }))
      )
      .flat();

    shuffle(newLanguages);

    return newLanguages;
  }, [languageUpgrades, selectedRealm]);

  return (
    <div className={styles.codeWrapper}>
      <Marquee
        marqueeItems={shuffledLanguageFiles.map((codeChunk) => (
          <SyntaxHighlighter
            key={codeChunk.code}
            language={codeChunk.language}
            style={docco}
          >
            {codeChunk.code}
          </SyntaxHighlighter>
        ))}
        delay={delay * 0.04 - 10}
        height={300}
      />
    </div>
  );
};

export default memo(CodeMarquee);
