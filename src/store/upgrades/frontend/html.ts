import { defaultHtmlUpgradeDetails, htmlUpgrades } from '../../../constants/frontend/htmlDefaults';
import createUpgradeSelector from '../../generators/upgradeSelectorGenerator';

export const htmlUpgradesSelector = createUpgradeSelector({
  language: 'html',
  defaultUpgradeDetails: defaultHtmlUpgradeDetails,
  upgrades: htmlUpgrades,
});
