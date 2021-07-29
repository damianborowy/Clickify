import { selector } from 'recoil';
import { availableLanguages } from '../../constants/languageFiles';
import { selectedRealmAtom } from '../engine';
import { htmlUpgradesSelector } from './html';

export const frontendUpgradesSelector = selector({
  key: 'frontendUpgrades',
  get: ({ get }) => {
    const selectedRealm = get(selectedRealmAtom);
    const htmlUpgrades = get(htmlUpgradesSelector);

    return [htmlUpgrades].map((upgrades, index) => ({
      language: availableLanguages[selectedRealm][index],
      upgrades,
    }));
  },
});
