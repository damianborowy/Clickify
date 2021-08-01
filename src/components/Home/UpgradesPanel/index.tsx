import { Button } from '@material-ui/core';
import { useRecoilState, useRecoilValue } from 'recoil';
import { buyMultiplierAtom, selectedLanguageAtom, selectedRealmAtom } from '../../../store/engine';
import { allUpgradesSelector } from '../../../store/upgrades';
import BuyMultiplier from '../../../types/BuyMultiplier';
import styles from './style.module.scss';
import UpgradeComponent from './Upgrade';

const UpgradesPanel = () => {
  const [buyMultiplier, setBuyMultiplier] = useRecoilState(buyMultiplierAtom);
  const selectedRealm = useRecoilValue(selectedRealmAtom);
  const selectedLanguage = useRecoilValue(selectedLanguageAtom);
  const allUpgrades = useRecoilValue(allUpgradesSelector);

  const handleMultiplierChanged = () => {
    const enumValues = Object.values(BuyMultiplier);
    const currentMultiplierIndex = enumValues.indexOf(buyMultiplier);

    const newEnumIndex = enumValues.length !== currentMultiplierIndex - 1 ? currentMultiplierIndex + 1 : 0;

    setBuyMultiplier(enumValues.find((_elem, index) => index === newEnumIndex) || BuyMultiplier.ONE);
  };

  return (
    <div className={styles.container}>
      <div>
        <Button onClick={handleMultiplierChanged}>{buyMultiplier}</Button>
      </div>
      <div>
        {allUpgrades[selectedRealm][selectedLanguage].map((upgrade) => (
          <UpgradeComponent key={upgrade.name} upgrade={upgrade} />
        ))}
      </div>
    </div>
  );
};

export default UpgradesPanel;
