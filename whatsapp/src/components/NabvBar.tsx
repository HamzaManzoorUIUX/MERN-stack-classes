import React from 'react';
import { NavBarWrapper } from './Style';
import Avatar from './Avatar';
import { IoMdMoon } from "react-icons/io";
import { HiStatusOnline } from "react-icons/hi";
import { BiMessageRoundedDots } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
const NabvBar = () => {
    return (
        <NavBarWrapper>
            <Avatar/> 
      <div className='nav-icons'>
      <button type='button'>
      <IoMdMoon/>
      </button>
      <button type='button'>
            <HiStatusOnline/>
      </button>
      <button type='button'>
            <BiMessageRoundedDots/>
      </button>
      <button type='button'>
            <BsThreeDotsVertical/>
      </button>
      </div>
        </NavBarWrapper>
    );
};

export default NabvBar;