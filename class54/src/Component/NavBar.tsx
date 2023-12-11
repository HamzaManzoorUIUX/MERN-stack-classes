import React, { FC } from 'react';
import Container from './Container';
import { FaPhone } from "react-icons/fa";
import { NavBarType, activeType } from '../types/main';
const NavBar:FC<NavBarType> = ({active,onChangeActive}) => {
    const menuItem=["about","skill","portfolio",'education']
    console.log('active',);
    
    return (
        <nav>
            <Container newClasses={"flex justify-between items-center"}>
                <a href="/" className='text-primary text-[24px] font-semibold'>
                    Hamza Manzoor
                </a>
                <ul className='flex '>
                    {
                        menuItem.map(obj=><li><button onClick={()=>onChangeActive(obj as activeType)} className={`p-6 block text-primary capitalize ${active===obj?"border border-primary bg-[#0C8CE91A] border-t-0":""}`}>{obj}</button></li>)
                    }
                </ul>
                <div>
                    <button className='' type='button'>
<FaPhone/>
                    </button>
                    <button type='button'>
Contact Me
                    </button>
                </div>
            </Container>
        </nav>
    );
};

export default NavBar;