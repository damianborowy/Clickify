import { selector } from 'recoil';
import { availableLanguages } from '../../constants/languages/languageFiles';
import LanguageUpgrades from '../../types/LanguageUpgrades';
import Realm from '../../types/Realm';
import RealmLanguageSelector from '../../types/RealmLanguageSelector';
import Upgrade from '../../types/Upgrade';
import UpgradeDetails from '../../types/UpgradeDetails';
import { selectedRealmAtom } from '../engine';

type CreateRealmUpgradesSelectorArgs = {
  realm: Realm;
  languageSelectors: RealmLanguageSelector;
};

const createRealmUpgradesSelector = ({ languageSelectors, realm }: CreateRealmUpgradesSelectorArgs) => {
  return selector<LanguageUpgrades>({
    key: `${realm.toString()}Upgrades`,
    get: ({ get }) => {
      const selectedRealm = get(selectedRealmAtom);

      return Object.values(languageSelectors)
        .map(get)
        .reduce((acc, upgrades, index) => {
          acc[availableLanguages[selectedRealm][index]] = upgrades;

          return acc;
        }, {} as LanguageUpgrades);
    },
    set: ({ set }, newValue) => {
      Object.entries(newValue as LanguageUpgrades).forEach(([language, upgrades]) => {
        set(languageSelectors[language], upgrades);
      });
    },
  });
};

export default createRealmUpgradesSelector;
