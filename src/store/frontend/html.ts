import { defaultHtmlUpgradeDetails, htmlUpgrades } from '../../constants/frontend/htmlDefaults';
import createUpgradeAtom from '../upgradeSelectorGenerator';

export const htmlUpgradesSelector = createUpgradeAtom({
  language: 'html',
  defaultUpgradeDetails: defaultHtmlUpgradeDetails,
  upgrades: htmlUpgrades,
});
