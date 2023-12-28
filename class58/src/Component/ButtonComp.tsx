import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const ButtonComp = () => {
    const {newStateChanger,abcAPiCaller}=useContext(GlobalContext)
    return (
        <div>
            <button type='button' onClick={()=>newStateChanger("Ali Raza")}>
                Click me
            </button>
            <button type='button' onClick={abcAPiCaller}>
                call api
            </button>
        </div>
    );
};

export default ButtonComp;