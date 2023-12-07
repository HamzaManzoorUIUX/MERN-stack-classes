import React from 'react';
import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import Home from './Pages/Home';
import CTF from './Pages/CTF';
import FTC from './Pages/FTC';

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/CTF",
      element: <CTF />,
    },
    {
      path: "/FTC",
      element: <FTC />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
};

export default App;