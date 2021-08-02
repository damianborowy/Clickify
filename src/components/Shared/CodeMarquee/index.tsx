import { memo } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Marquee from 'react-marquee-master';
import { useMemo } from 'react';
import shuffle from '../../../utils/shuffle';
import languageFilesByRealm from '../../../constants/languages/languageFiles';
import styles from './style.module.scss';
import { useRecoilValue } from 'recoil';
import { delayAtom, selectedRealmAtom } from '../../../store/engine';
import { allUpgradesSelector } from '../../../store/upgrades';

const CodeMarquee = () => {
  const delay = useRecoilValue(delayAtom);
  const selectedRealm = useRecoilValue(selectedRealmAtom);
  const allUpgrades = useRecoilValue(allUpgradesSelector);

  const shuffledLanguageFiles = useMemo(() => {
    const newLanguages = Object.entries(allUpgrades[selectedRealm])
      .filter(([_language, upgrades]) => upgrades.some((upgrade) => upgrade.level > 0))
      .map(([language]) =>
        languageFilesByRealm[selectedRealm][language].map((code) => ({
          code,
          language,
        }))
      )
      .flat();

    shuffle(newLanguages);

    return newLanguages;
  }, [allUpgrades, selectedRealm]);

  return (
    <div className={styles.codeWrapper}>
      <Marquee
        marqueeItems={shuffledLanguageFiles.map((codeChunk) => (
          <SyntaxHighlighter key={codeChunk.code} language={codeChunk.language} style={docco}>
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
