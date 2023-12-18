import React, { useState, useCallback } from 'react';

const App = () => {
  const [inputVal,setinputVal]=useState("")
  const result=useCallback(() => {
    if(inputVal)
    return((Number(inputVal) * Math.PI).toFixed(2))
  return 0
  }, [inputVal])()
  console.log(result);
  
  return (
    <div className='flex justify-center items-center h-screen flex-col'>
      <div>
      {inputVal}=d
      </div>
      <div>
        Circumfance of circle with dimeter of {inputVal} id {result}
      </div>
      <input type="number" value={inputVal} className='border border-black' onChange={(e)=>setinputVal(e.target.value)}/>
      <input type="number" className='border border-primary' onChange={(e)=>console.log(e.target.value)}/>
      <button type='button' className='bg-primary px-4 mt-2 rounded block py-2'>
        Calculate
      </button>
    </div>
  );
};

export default App;