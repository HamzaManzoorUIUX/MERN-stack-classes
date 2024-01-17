import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const ButtonComp = () => {
    const {abcAPiCaller}=useContext(GlobalContext)
    return (
        <div>
            <button type='button' className='bg-primary px-3 py-2 rounded text-white' onClick={abcAPiCaller}>
                call api
            </button>
        </div>
    );
};

export default ButtonComp;