// import React, { useEffect, useState } from 'react';
// import Preloader from './components/Preloader';
// import MainChat from './components/MainChat';
import Section from "./components/Section"

const App = () => {
  // const [loading,setLoading]=useState(true)
  // const speedToHide=2
  // useEffect(()=>{
  //   setTimeout(()=>{
  //     setLoading(false)
  //   },speedToHide*1000)
  // },[])
  return (
    <div>
      <Section/>
      {/* {
        loading?
        <Preloader speedToHide={speedToHide}/>:<MainChat/>
      } */}
    </div>
  );
};

export default App;