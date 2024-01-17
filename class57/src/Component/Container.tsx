import React, { FC, ReactElement } from 'react';

const Container:FC<{children:ReactElement[]|ReactElement|string,className?:string}> = ({children,className}) => {    
    return (
        <div className={`max-w-[1172px] w-full mx-auto px-4 ${className}`}>
            {children}
        </div>
    );
};

export default Container;