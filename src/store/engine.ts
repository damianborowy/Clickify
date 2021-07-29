import { atom, selector } from 'recoil';
import { persistAtom } from '.';
import BuyMultiplier from '../types/BuyMultiplier';
import Realm from '../types/Realm';

export const delayAtom = atom<number>({
  key: 'delay',
  default: 1000,
  effects_UNSTABLE: [persistAtom],
});

export const buyMultiplierAtom = atom<BuyMultiplier>({
  key: 'buyMultiplier',
  default: BuyMultiplier.ONE,
});

export const selectedRealmAtom = atom<Realm>({
  key: 'realm',
  default: Realm.FRONTEND,
});

export const selectedLanguageSelector = selector<string>({
  key: 'selectedLanguage',
  get: ({ get }) => {
    return '';
  },
  set: ({ set }, newLanguage) => {
    set(selectedLanguageSelector, newLanguage);
  },
});
