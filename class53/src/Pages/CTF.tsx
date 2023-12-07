import React, { useState } from 'react';

const CTF = () => {
    const [myInput,setMyInput]=useState("37")
    const calculateFunc=()=>{
        const tem=Number(myInput)

    }
    return (
        <div>
            <h3>
                C to F
            </h3>
         <input value={myInput} onChange={e=>setMyInput(e.target.value)} type='number'/>
         <button type='button' onClick={calculateFunc}>
            Convert
            </button> 
        </div>
    );
};

export default CTF;