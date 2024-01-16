import React, { useEffect, useState } from 'react';
import Preloader from './components/Preloader';
import MainChat from './components/MainChat';

const App = () => {
  const [loading,setLoading]=useState(true)
  const speedToHide=2
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },speedToHide*1000)
  },[])
  return (
    <div>
      {
        loading?
        <Preloader speedToHide={speedToHide}/>:<MainChat/>
      }
    </div>
  );
};

export default App;