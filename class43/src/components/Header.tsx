import React, { FC } from 'react';

const Header:FC<{title:string}> = ({title}) => {
    return (
        <div>
            hello class {title}
        </div>
    );
};

export default Header;