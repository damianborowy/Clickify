import BottomMenu from "../../components/Home/BottomMenu";
import CodeMarquee from "../../components/Shared/CodeMarquee";
import TopBar from "../../components/Shared/TopBar";
import styles from "./style.module.scss";

const HomePage = () => (
  <div className={styles.container}>
    <TopBar />
    <CodeMarquee languages={["javascript", "html"]} />
    <BottomMenu />
  </div>
);

export default HomePage;
