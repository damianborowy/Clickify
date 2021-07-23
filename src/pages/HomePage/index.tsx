import { useRecoilState } from "recoil";
import { fooAtom } from "../../store/foo";

const HomePage = () => {
    const [foo, setFoo] = useRecoilState(fooAtom);

    return (
      <div>
        <button onClick={() => setFoo(foo + 1)}>{foo}</button>
      </div>
    );
};

export default HomePage;