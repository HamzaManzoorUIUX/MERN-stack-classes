import React, { FC } from 'react';
import Container from './Container';
import { FaPhone } from "react-icons/fa";
import { NavBarType, activeType } from '../types/main';
import { Link } from 'react-router-dom';
const NavBar:FC<NavBarType> = ({active,onChangeActive}) => {
    const menuItem=["about","skill","portfolio",'education']
    return (
        <nav>
            <Container className={"flex justify-between items-center"}>
                <Link to="/header" className='text-primary text-[24px] font-semibold'>
                    Hamza Manzoor
                </Link>
                <ul className='flex '>
                    {
                        menuItem.map(obj=><li><button onClick={()=>onChangeActive&&onChangeActive(obj as activeType)} className={`p-6 block text-primary capitalize ${active===obj?"border border-primary bg-[#0C8CE91A] border-t-0":""}`}>{obj}</button></li>)
                    }
                </ul>
                <div className='flex gap-[24px]'>
                    <button className='py-7 px-2 block text-primary border border-primary border-t-0' type='button'>
                        <FaPhone/>
                    </button>
                    <button type='button' className='py-6 px-4 block bg-primary text-[18px] text-white font-medium'>
                        Contact Me
                    </button>
                </div>
            </Container>
        </nav>
    );
};

export default NavBar;