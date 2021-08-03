import { RecoilState } from 'recoil';
import Upgrade from './Upgrade';
import UpgradeDetails from './UpgradeDetails';

type RealmLanguageSelector = { [x: string]: RecoilState<(Upgrade & UpgradeDetails)[]> };

export default RealmLanguageSelector;
