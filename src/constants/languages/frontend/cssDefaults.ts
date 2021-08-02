import UpgradeDetails from '../../../types/UpgradeDetails';
import { ReactComponent as Foo } from '../../assets/icons/foo.svg';
import Upgrade from '../../../types/Upgrade';

export const cssUpgrades: Upgrade[] = [
  {
    name: 'Foo',
    icon: Foo,
  },
];

export const defaultCssUpgradeDetails: UpgradeDetails[] = [
  {
    level: 1,
  },
];
