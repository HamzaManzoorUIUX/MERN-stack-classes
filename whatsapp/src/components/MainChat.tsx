import React from 'react';
import { MainChatWrapper } from './Style';
import NabvBar from './NabvBar';
import ConnectionBar from './ConnectionBar';
import User from './Users';
import Section from './Section';

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
                <Section/>
            </div>
        </MainChatWrapper>
    );
};

export default MainChat;