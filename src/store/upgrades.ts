import { RecoilState, selector } from 'recoil';
import LanguageUpgrades from '../types/LanguageUpgrades';
import Realm from '../types/Realm';
import { frontendUpgradesSelector } from './upgrades/frontend';

export type AllUpgrades = {
  [x: string]: LanguageUpgrades;
};

const upgradesByRealm: { [x: string]: RecoilState<LanguageUpgrades> } = {
  [Realm.FRONTEND]: frontendUpgradesSelector,
};

export const allUpgradesSelector = selector<AllUpgrades>({
  key: 'allUpgrades',
  get: ({ get }) => {
    return Object.entries(upgradesByRealm).reduce((acc, [realm, realmUpgrades]) => {
      acc[realm] = get(realmUpgrades);

      return acc;
    }, {} as AllUpgrades);
  },
  set: ({ set }, newValue) => {
    Object.entries(newValue as AllUpgrades).forEach(([realm, realmUpgrades]) => {
      set(upgradesByRealm[realm], realmUpgrades);
    });
  },
});
