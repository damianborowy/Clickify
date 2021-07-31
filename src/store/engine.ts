import { atom, selector } from 'recoil';
import { persistAtom } from '.';
import { availableLanguages } from '../constants/languageFiles';
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

export const selectedLanguageAtom = atom<string>({
  key: 'selectedLanguage',
  default: availableLanguages[Realm.FRONTEND][0]
});
