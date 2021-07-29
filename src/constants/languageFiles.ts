import cssCode from "../code/cssCode";
import htmlCode from "../code/htmlCode";
import javascriptCode from "../code/javascriptCode";
import typescriptCode from "../code/typescriptCode";
import Realm from "../types/Realm";

const frontendLanguages = {
  css: cssCode,
  javascript: javascriptCode,
  html: htmlCode,
  typescript: typescriptCode,
};

const languageFiles = {
  [Realm.FRONTEND]: frontendLanguages,
};

export const availableLanguages = Object.entries(languageFiles).map(
  ([key, value]) => ({ [key]: Object.keys(value) })
);

export default languageFiles;
