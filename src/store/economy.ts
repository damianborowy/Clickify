import { RecoilState, selector } from 'recoil';
import LanguageEconomy from '../types/LanguageEconomy';
import Realm from '../types/Realm';
import { frontendEconomyAtom } from './economy/frontend';

export type AllRealmsEconomies = {
  [x: string]: LanguageEconomy;
};

const economyByRealm: { [x: string]: RecoilState<LanguageEconomy> } = {
  [Realm.FRONTEND]: frontendEconomyAtom,
};

export const allRealmsEconomiesSelector = selector<AllRealmsEconomies>({
  key: 'allRealmsEconomy',
  get: ({ get }) => {
    return Object.entries(economyByRealm).reduce((acc, [realm, realmEconomy]) => {
      acc[realm] = get(realmEconomy);

      return acc;
    }, {} as AllRealmsEconomies);
  },
  set: ({ set }, newValue) => {
    Object.entries(newValue as AllRealmsEconomies).forEach(([realm, realmEconomy]) => {
      set(economyByRealm[realm], realmEconomy);
    });
  },
});
