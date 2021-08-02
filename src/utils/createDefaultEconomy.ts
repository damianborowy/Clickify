import { availableLanguages } from "../constants/languages/languageFiles";
import Realm from '../types/Realm';

const createDefaultEconomy = (realm: Realm) =>
  availableLanguages[realm].reduce((acc, language) => {
    acc[language] = 0;

    return acc;
  }, {} as { [x: string]: number });

export default createDefaultEconomy;