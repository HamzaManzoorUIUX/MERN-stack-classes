import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const MainContent = () => {
    const {state,apiData}=useContext(GlobalContext)
    console.log('apiData',apiData);
    
    return (
        <div>
            hello this is 
            &nbsp;{state}.
            how are you
        </div>
    );
};

export default MainContent;