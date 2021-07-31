import Upgrade from '../../../../types/Upgrade';
import UpgradeDetails from '../../../../types/UpgradeDetails';
import styles from './style.module.scss';

type UpgradeProps = {
  upgrade: Upgrade & UpgradeDetails;
};

const UpgradeComponent = ({ upgrade }: UpgradeProps) => {
  return <div>{upgrade.name}</div>;
};

export default UpgradeComponent;
