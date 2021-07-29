import { atom, selector } from "recoil";
import { persistAtom } from "..";
import {
  defaultHtmlUpgradeDetails,
  htmlUpgrades,
} from "../../constants/frontend/htmlDefaults";
import Upgrade from "../../types/Upgrade";
import UpgradeDetails from "../../types/UpgradeDetails";

const htmlUpgradeDetailsAtom = atom<UpgradeDetails[]>({
  key: "languageUpgradesAtom",
  default: defaultHtmlUpgradeDetails,
  effects_UNSTABLE: [persistAtom],
});

export const htmlUpgradesSelector = selector<(Upgrade & UpgradeDetails)[]>({
  key: "languageUpgrades",
  get: ({ get }) => {
    const htmlUpgradeDetails = get(htmlUpgradeDetailsAtom);

    return htmlUpgrades.map((upgrade, index) => ({
      ...upgrade,
      ...htmlUpgradeDetails[index],
    }));
  },
  set: ({ set }, newValue) => {
    const value = newValue as (Upgrade & UpgradeDetails)[];

    const newLanguageUpgrades: UpgradeDetails[] = value.map((language) => ({
      level: language.level,
    }));

    set(htmlUpgradeDetailsAtom, newLanguageUpgrades);
  },
});
