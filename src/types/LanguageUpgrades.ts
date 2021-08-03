import Upgrade from './Upgrade';
import UpgradeDetails from './UpgradeDetails';

type LanguageUpgrades = { [x: string]: (Upgrade & UpgradeDetails)[] };

export default LanguageUpgrades;
