import React, { useState } from 'react';

const FTC = () => {
    const [myInput,setMyInput]=useState("37")
    const calculateFunc=()=>{
        const tem=Number(myInput)

    }
    return (
        <div>
            <h3>
                F to C
            </h3>
         <input value={myInput} onChange={e=>setMyInput(e.target.value)} type='number'/>
         <button type='button' onClick={calculateFunc}>
            Convert
            </button> 
        </div>
    );
};

export default FTC;