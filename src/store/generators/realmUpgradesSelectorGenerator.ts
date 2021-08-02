import { RecoilState, selector } from 'recoil';
import { availableLanguages } from '../../constants/languages/languageFiles';
import Realm from '../../types/Realm';
import Upgrade from '../../types/Upgrade';
import UpgradeDetails from '../../types/UpgradeDetails';
import { selectedRealmAtom } from '../engine';

type CreateRealmUpgradesSelectorArgs = {
  realm: Realm;
  languageSelectors: RecoilState<(Upgrade & UpgradeDetails)[]>[];
};

const createRealmUpgradesSelector = ({ languageSelectors, realm }: CreateRealmUpgradesSelectorArgs) => {
  return selector({
    key: `${realm.toString()}Upgrades`,
    get: ({ get }) => {
      const selectedRealm = get(selectedRealmAtom);

      return languageSelectors.map(get).reduce((acc, upgrades, index) => {
        acc[availableLanguages[selectedRealm][index]] = upgrades;

        return acc;
      }, {} as { [x: string]: (Upgrade & UpgradeDetails)[] });
    },
  });
};

export default createRealmUpgradesSelector;
