import React, { FC } from 'react';

const NavBar:FC<{title:string,color?:string}> = ({title,color}) => {
    return (
        <div className='main-nav-bar' style={{backgroundColor:color}}>
            {title}
        </div>
    );
};

export default NavBar;