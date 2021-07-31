import { atom, selector } from 'recoil';
import { persistAtom } from '..';
import Upgrade from '../../types/Upgrade';
import UpgradeDetails from '../../types/UpgradeDetails';

type CreateUpgradeSelectorArgs = {
  language: string;
  defaultUpgradeDetails: UpgradeDetails[];
  upgrades: Upgrade[];
};

const createUpgradeSelector = ({ language, defaultUpgradeDetails, upgrades }: CreateUpgradeSelectorArgs) => {
  const newUpgradeAtom = atom<UpgradeDetails[]>({
    key: `${language}UpgradeDetailsAtom`,
    default: defaultUpgradeDetails,
    effects_UNSTABLE: [persistAtom],
  });

  return selector<(Upgrade & UpgradeDetails)[]>({
    key: `${language}UpgradeDetails`,
    get: ({ get }) => {
      const newUpgrade = get(newUpgradeAtom);

      return upgrades.map((upgrade, index) => ({
        ...upgrade,
        ...newUpgrade[index],
      }));
    },
    set: ({ set }, newValue) => {
      const value = newValue as (Upgrade & UpgradeDetails)[];

      const newLanguageUpgrades: UpgradeDetails[] = value.map((language) => ({
        level: language.level,
      }));

      set(newUpgradeAtom, newLanguageUpgrades);
    },
  });
};

export default createUpgradeSelector;
