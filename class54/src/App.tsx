import React, { useState } from 'react';
import "./assets/scss/main.scss";
import NavBar from './Component/NavBar';
import { activeType } from './types/main';
import HeaderSection from './Component/HeaderSection';

const App = () => {
  const [activeTab,setActiveTab]=useState<activeType>('about')
  return (
    <div className='bg-[#D8EAF6]'>
      <NavBar active={activeTab} onChangeActive={setActiveTab}/>
      <HeaderSection/>
    </div>
  );
};

export default App;