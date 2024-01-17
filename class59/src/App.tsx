import ButtonComp from './Component/ButtonComp';
import MainContent from './Component/MainContent';
import { ContextProvider } from './context/GlobalContext';

const App = () => {
  return (
    <ContextProvider>
      <div>
        <MainContent/>
      </div>
        <ButtonComp/>
    </ContextProvider>
  );
};

export default App;