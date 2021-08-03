import Realm from '../../../types/Realm';
import createRealmUpgradesSelector from '../../generators/realmUpgradesSelectorGenerator';
import { htmlUpgradesSelector } from './html';

export const frontendUpgradesSelector = createRealmUpgradesSelector({
  languageSelectors: {
    html: htmlUpgradesSelector,
  },
  realm: Realm.FRONTEND,
});
