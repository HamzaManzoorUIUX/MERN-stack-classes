import React from 'react';
import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import Home from './Pages/Home';
import Aboutus from './Pages/Aboutus';

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/aboutus",
      element: <Aboutus />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
};

export default App;