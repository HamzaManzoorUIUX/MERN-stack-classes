import React, { useState } from 'react';
import NavBar from './Component/NavBar';

const App = () => {
  const [state,setState]=useState(1)
  const [state1,setState1]=useState(1)
  console.log("App.tsx");
  console.log('state',state);
  console.log('state1',state1);
  
  return (
    <div>
      <NavBar data={state1}/>
      <button className='bg-primary block px-4 py-2 text-white' onClick={()=>setState(pre=>pre+1)}>Submit</button>
      <button className='bg-red-600 block px-4 py-2 text-white' onClick={()=>setState1(pre=>pre+1)}>Submit</button>
    </div>
  );
};

export default App;