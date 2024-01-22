import React, { useEffect, useState } from "react";
import Preloader from "./components/Preloader";
import MainChat from "./components/MainChat";
// import Users from "./components/Users";


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
      {/* <Users /> */}
      {

        loading?
        <Preloader speedToHide={speedToHide}/>:<MainChat/>
      }
    </div>
  );
};

export default App;
