import { selector } from 'recoil';
import Realm from '../types/Realm';
import Upgrade from '../types/Upgrade';
import UpgradeDetails from '../types/UpgradeDetails';
import { frontendUpgradesSelector } from './upgrades/frontend';

const upgradesByRealm = {
  [Realm.FRONTEND]: frontendUpgradesSelector,
};

export const allUpgradesSelector = selector({
  key: 'allUpgrades',
  get: ({ get }) => {
    return Object.entries(upgradesByRealm).reduce((acc, [realm, realmUpgrades]) => {
      acc[realm] = get(realmUpgrades);

      return acc;
    }, {} as { [x: string]: { [x: string]: (Upgrade & UpgradeDetails)[] } });
  },
});
