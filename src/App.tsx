import { useRecoilValue } from 'recoil';
import useInterval from './hooks/useInterval';
import HomePage from './pages/HomePage';
import { delayAtom } from './store/engine';

const App = () => {
  const delay = useRecoilValue(delayAtom);

  useInterval(() => {
    console.log('foo');
  }, delay);

  return <HomePage />;
};

export default App;
