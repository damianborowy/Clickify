import { availableLanguages } from '../constants/languages/languageFiles';
import LanguageEconomy from '../types/LanguageEconomy';
import Realm from '../types/Realm';

const createDefaultEconomy = (realm: Realm) =>
  availableLanguages[realm].reduce((acc, language) => {
    acc[language] = 0;

    return acc;
  }, {} as LanguageEconomy);

export default createDefaultEconomy;
