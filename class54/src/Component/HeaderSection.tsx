import React from 'react';
import {ReactComponent as HeaderBG} from '../assets/svg/Header-BG.svg'
import Container from './Container';
import UserImg from '../assets/images/Illustraion 2.png'
const HeaderSection = () => {
    return (
        <header className='pt-[60px]'>
            <Container className='flex justify-between items-center '>
            <div className='leading-[2]'><h3 className=' text-[34px] text-primary font-medium'>Looking for Experienced Developer</h3>
            <p className='leading-10 text-[34px] text-primary font-medium'>My Name is</p>
            <h1 className='text-[50px] text-primary font-medium'>Hamza Manzoor</h1>
            <button className='py-2 px-10 block bg-primary text-[25px] text-white font-medium'>Download CV</button>
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