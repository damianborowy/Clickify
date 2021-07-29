import { Button } from '@material-ui/core';
import { useRecoilState } from 'recoil';
import { buyMultiplierAtom } from '../../../store/engine';
import BuyMultiplier from '../../../types/BuyMultiplier';
import styles from './style.module.scss';

const UpgradesPanel = () => {
  const [buyMultiplier, setBuyMultiplier] = useRecoilState(buyMultiplierAtom);

  const handleMultiplierChanged = () => {
    const enumValues = Object.values(BuyMultiplier);
    const currentMultiplierIndex = enumValues.indexOf(buyMultiplier);

    const newEnumIndex = enumValues.length !== currentMultiplierIndex - 1 ? currentMultiplierIndex + 1 : 0;

    setBuyMultiplier(enumValues.find((_elem, index) => index === newEnumIndex) || BuyMultiplier.ONE);
  };

  return (
    <div>
      <div>
        <Button onClick={handleMultiplierChanged}>{buyMultiplier}</Button>
      </div>
      <div></div>
    </div>
  );
};

export default UpgradesPanel;
