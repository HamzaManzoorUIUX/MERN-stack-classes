import React from 'react';
import NavBar from './Component/NavBar';
import { RouterProvider,createBrowserRouter } from "react-router-dom";
import './assets/scss/main.scss'
import HeaderSection from './Component/HeaderSection';
const App = () => {
  const myRoutes=createBrowserRouter([
    {
      path:"/",
      element:<NavBar/>
    },
    {
      path:"/header",
      element:<HeaderSection/>
    },
  ])
  return (
    <div>
      <RouterProvider router={myRoutes}/>
    </div>
  );
};

export default App;