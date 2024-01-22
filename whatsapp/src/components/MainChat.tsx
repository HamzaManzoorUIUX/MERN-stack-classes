import React from 'react';
import { MainChatWrapper } from './Style';
import NabvBar from './NabvBar';
import ConnectionBar from './ConnectionBar';
import User from './Users';

const MainChat = () => {
    return (
        <MainChatWrapper>
            <div className='left-side-section'>
                <NabvBar />
                <ConnectionBar />
                <div>
                <User/>
                </div>
            </div>
            <div className='right-side-section'>
                right
            </div>
        </MainChatWrapper>
    );
};

export default MainChat;