import { Button } from '@material-ui/core';
import Upgrade from '../../../../types/Upgrade';
import UpgradeDetails from '../../../../types/UpgradeDetails';
import styles from './style.module.scss';

type UpgradeProps = {
  upgrade: Upgrade & UpgradeDetails;
};

const UpgradeComponent = ({ upgrade }: UpgradeProps) => {
  const levelUpUpgrade = () => {
    console.log(upgrade);
  };

  return (
    <div className={styles.container}>
      <upgrade.icon className={styles.upgradeIcon} />
      <div className={styles.upgradeInfoContainer}>
        <span>{upgrade.name}</span>
        <span>Produkcja</span>
        <Button onClick={levelUpUpgrade}>Ulepsz</Button>
      </div>
    </div>
  );
};

export default UpgradeComponent;
