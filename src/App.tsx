import { useRecoilValue } from 'recoil';
import useInterval from './hooks/useInterval';
import HomePage from './pages/HomePage';
import { delayAtom } from './store/engine';
import { allUpgradesSelector } from './store/upgrades';

const App = () => {
  const delay = useRecoilValue(delayAtom);
  const allUpgrades = useRecoilValue(allUpgradesSelector);

  useInterval(() => {
    const t0 = performance.now();

    Object.entries(allUpgrades).forEach(([realm, realmUpgrades]) => {
      Object.entries(realmUpgrades).forEach(([language, upgrades]) => {
        const sum = upgrades.reduce((acc, upgrade) => acc + (upgrade.production || 0), 0);

        console.log(sum);
      });
    });

    console.log(`${performance.now() - t0}ms`);
  }, delay);

  return <HomePage />;
};

export default App;
