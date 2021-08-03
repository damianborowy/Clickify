import { useRef, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import useInterval from './hooks/useInterval';
import HomePage from './pages/HomePage';
import { AllRealmsEconomies, allRealmsEconomiesSelector } from './store/economy';
import { delayAtom } from './store/engine';
import { AllUpgrades, allUpgradesSelector } from './store/upgrades';

const App = () => {
  const delay = useRecoilValue(delayAtom);
  const [allUpgrades, setAllUpgrades] = useRecoilState(allUpgradesSelector);
  const [allRealmsEconomies, setAllRealmsEconomies] = useRecoilState(allRealmsEconomiesSelector);
  const [foo, setFoo] = useState({ min: Number.MAX_VALUE, max: Number.MIN_VALUE, avg: 0 });
  const times = useRef<number[]>([]);

  useInterval(() => {
    const t0 = performance.now();

    const newUpgrades: AllUpgrades = JSON.parse(JSON.stringify(allUpgrades));
    const newRealmsEconomies: AllRealmsEconomies = JSON.parse(JSON.stringify(allRealmsEconomies));

    Object.entries(allUpgrades).forEach(([realm, realmUpgrades]) => {
      Object.entries(realmUpgrades).forEach(([language, upgrades]) => {
        const sumOfNewLines = upgrades.reduce((acc, upgrade) => acc + (upgrade.production || 0), 0);

        newRealmsEconomies[realm][language] += sumOfNewLines;
      });
    });

    setAllUpgrades(newUpgrades);
    setAllRealmsEconomies(newRealmsEconomies);

    const t1 = performance.now() - t0;

    times.current = [...times.current, t1];
    setFoo({
      min: Math.min(foo.min, t1),
      max: Math.max(foo.max, t1),
      avg: times.current.reduce((acc, val) => acc + val, 0) / times.current.length,
    });
  }, delay);

  return (
    <div>
      Min: {foo.min} ms <br />
      Max: {foo.max} ms <br />
      Avg: {foo.avg} ms <br />
      <HomePage />
    </div>
  );
};

export default App;
