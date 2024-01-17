import React, { useCallback, useState } from 'react';
import {ReactComponent as HeaderBG} from '../assets/svg/Header-BG.svg'
import Container from './Container';
import UserImg from '../assets/images/Illustraion 2.png'
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
const HeaderSection = () => {
    return (
        <header className='pt-[60px]'>
            <NavBar/>
            <Container className='flex justify-between items-center'>
            <div>
                <Link to="/">
                Hamza
                </Link>
            </div>
            <div className='max-w-[560px] w-full relative'>
            <HeaderBG/>
            <div className='absolute left-[100px] top-[70px] border-4 border-white w-[374px] h-[453px] bg-[#0C8CE9B2] rounded-[21px] overflow-hidden'>
<img src={UserImg} className='w-full absolute right-[-14px] bottom-[-6px]' alt="UserImg" />
            </div>
            </div>
            </Container>
        </header>
    );
};

export default HeaderSection;