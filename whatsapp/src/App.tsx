import React, { useEffect, useState } from "react";
import Preloader from "./components/Preloader";
import MainChat from "./components/MainChat";
// import Users from "./components/Users";

<<<<<<< Updated upstream
=======

const UserData = [
  {
    name : "Veronica Burns",
    img: "https://i.pravatar.cc/150?u"+crypto.randomUUID(),
  },
  {
    name : "Olivia Casey",
    img: "https://i.pravatar.cc/150?u"+crypto.randomUUID(),
  },
  {
    name : "Nick Farmer",
    img: "https://i.pravatar.cc/150?u"+crypto.randomUUID(),
  },
  {
    name : "Bernadette Singleton",
    img: "https://i.pravatar.cc/150?u"+crypto.randomUUID(),
  },
  {
    name : "Ramona Floyd",
    img: "https://i.pravatar.cc/150?u"+crypto.randomUUID(),
  },
  {
    name : "Michelle Lucas",
    img: "https://i.pravatar.cc/150?u"+crypto.randomUUID(),
  },
  {
    name : "Van Wright",
    img: "https://i.pravatar.cc/150?u"+crypto.randomUUID(),
  },
 
  
  
]


>>>>>>> Stashed changes
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
