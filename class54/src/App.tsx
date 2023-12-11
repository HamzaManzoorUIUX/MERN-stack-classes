import React, { useState } from 'react';
import "./assets/scss/main.scss";
import NavBar from './Component/NavBar';
import { activeType } from './types/main';

const App = () => {
  const [activeTab,setActiveTab]=useState<activeType>('skill')
  return (
    <div className='bg-[#D8EAF6]'>
      <NavBar active={activeTab} onChangeActive={setActiveTab}/>
    </div>
  );
};

export default App;