import UpgradeDetails from '../../../types/UpgradeDetails';
import { ReactComponent as Foo } from '../../../assets/icons/foo.svg';
import Upgrade from '../../../types/Upgrade';

export const htmlUpgrades: Upgrade[] = [
  {
    name: 'Foo',
    icon: Foo,
  },
];

export const defaultHtmlUpgradeDetails: UpgradeDetails[] = [
  {
    level: 1,
  },
];
