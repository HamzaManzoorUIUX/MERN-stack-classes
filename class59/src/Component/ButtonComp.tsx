import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const ButtonComp = () => {
    const {abcAPiCaller}=useContext(GlobalContext)
    return (
        <div>
            <button type='button' >
                Click me
            </button>
            <button type='button' onClick={abcAPiCaller}>
                call api
            </button>
        </div>
    );
};

export default ButtonComp;