import LanguagePicker from '../../components/Home/LanguagePicker';
import UpgradesPanel from '../../components/Home/UpgradesPanel';
import BottomMenu from '../../components/Shared/BottomMenu';
import CodeMarquee from '../../components/Shared/CodeMarquee';
import TopBar from '../../components/Shared/TopBar';
import styles from './style.module.scss';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <TopBar />
      <CodeMarquee />
      <LanguagePicker />
      <UpgradesPanel />
      <BottomMenu />
    </div>
  );
};

export default HomePage;
