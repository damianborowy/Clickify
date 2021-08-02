import { atom } from "recoil";
import { persistAtom } from "..";
import { frontendEconomyDefaults } from "../../constants/economy/frontend";
import LanguageEconomy from "../../types/LanguageEconomy";

export const frontendEconomy = atom<LanguageEconomy>({
  key: 'frontendEconomy',
  default: frontendEconomyDefaults,
  effects_UNSTABLE: [persistAtom],
});
