import { defaultHtmlUpgradeDetails, htmlUpgrades } from '../../../constants/languages/frontend/htmlDefaults';
import createUpgradeSelector from '../../generators/upgradeSelectorGenerator';

export const htmlUpgradesSelector = createUpgradeSelector({
  language: 'html',
  defaultUpgradeDetails: defaultHtmlUpgradeDetails,
  upgrades: htmlUpgrades,
});
