import React from 'react';
import Cards from './components/Cards';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Cards/>
      <Cards/>
      <Cards/>
    </div>
  );
};

export default App;