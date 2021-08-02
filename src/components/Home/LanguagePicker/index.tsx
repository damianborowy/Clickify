import { Button } from '@material-ui/core';
import { useRecoilState, useRecoilValue } from 'recoil';
import { availableLanguages } from '../../../constants/languages/languageFiles';
import { selectedLanguageAtom, selectedRealmAtom } from '../../../store/engine';
import styles from './style.module.scss';

const LanguagePicker = () => {
  const selectedRealm = useRecoilValue(selectedRealmAtom);
  const [selectedLanguage, setSelectedLanguage] = useRecoilState(selectedLanguageAtom);

  return (
    <div>
      {availableLanguages[selectedRealm].map((language) => (
        <Button
          key={language}
          color={language === selectedLanguage ? 'primary' : 'inherit'}
          onClick={() => setSelectedLanguage(language)}
        >
          {language}
        </Button>
      ))}
    </div>
  );
};

export default LanguagePicker;
