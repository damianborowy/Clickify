import Realm from '../../types/Realm';
import createRealmUpgradesSelector from '../generators/realmUpgradesSelectorGenerator';
import { htmlUpgradesSelector } from './html';

export const frontendUpgradesSelector = createRealmUpgradesSelector({
  languageSelectors: [htmlUpgradesSelector],
  realm: Realm.FRONTEND,
});
