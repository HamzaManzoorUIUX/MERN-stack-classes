import NavBar from "./components/NavBar";
import Header from "./components/Header";
import { useState } from "react";

const App = () => {
  const AppName = "Xeurix New";
  const [removeNav, setremoveNav] = useState(false);
  return (
    <div>
      {removeNav ? null : <NavBar title={AppName} />}
      <Header title={AppName} />
      <button onClick={()=>setremoveNav(!removeNav)}>click me</button>
    </div>
  );
};

export default App;
