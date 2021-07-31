import cssCode from '../code/cssCode';
import htmlCode from '../code/htmlCode';
import javascriptCode from '../code/javascriptCode';
import typescriptCode from '../code/typescriptCode';
import Realm from '../types/Realm';

const frontendLanguages: { [key: string]: string[] } = {
  html: htmlCode,
  css: cssCode,
  javascript: javascriptCode,
  typescript: typescriptCode,
};

const languageFilesByRealm = {
  [Realm.FRONTEND]: frontendLanguages,
};

export const availableLanguages = Object.entries(languageFilesByRealm).reduce(
  (acc, [realm, languageFiles]) => ({ ...acc, [realm]: Object.keys(languageFiles) }),
  {} as { [x: string]: string[] }
);

export default languageFilesByRealm;
