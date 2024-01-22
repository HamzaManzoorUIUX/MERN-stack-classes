import React from 'react';
import { MainChatWrapper } from './Style';
import NabvBar from './NabvBar';
import ConnectionBar from './ConnectionBar';

const MainChat = () => {
    
    return (
        <MainChatWrapper>
            <div className='left-side-section'>
<NabvBar/>
<ConnectionBar/>
            </div>
            <div className='right-side-section'>
right
            </div>
        </MainChatWrapper>
    );
};

export default MainChat;