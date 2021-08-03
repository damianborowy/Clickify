import { useState } from 'react';
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
  const [foo, setFoo] = useState('');

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

    setFoo(`${performance.now() - t0}ms`);
  }, delay);

  return (
    <div>
      {foo} ms
      <HomePage />
    </div>
  );
};

export default App;
