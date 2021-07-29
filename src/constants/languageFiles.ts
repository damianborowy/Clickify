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

const languageFiles = {
  [Realm.FRONTEND]: frontendLanguages,
};

export const availableLanguages = Object.entries(languageFiles).reduce(
  (acc, [key, value]) => ({ ...acc, [key]: Object.keys(value) }),
  {} as { [x: string]: string[] }
);

export default languageFiles;
