import NavBar from "./components/NavBar";
import Header from "./components/Header";

const App = () => {
  const AppName="Xeurix New"
  return (
    <div>
      <NavBar title={AppName} />
      <Header title={AppName}/>
    </div>
  );
};

export default App;
