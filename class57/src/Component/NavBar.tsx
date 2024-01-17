import React, { FC, memo } from 'react';

const NavBar:FC<{data?:number}> = memo(({data}) => {
    console.log("navbar",data);
    
    return (
        <div>
            Navbar
        </div>
    );
});

export default NavBar;