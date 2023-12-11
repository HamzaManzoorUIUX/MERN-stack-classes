import React, { FC, ReactElement } from 'react';

const Container:FC<{children:ReactElement[]|ReactElement|string,newClasses?:string}> = ({children,newClasses}) => {    
    return (
        <div className={`max-w-[1172px] w-full mx-auto px-4 ${newClasses}`}>
            {children}
        </div>
    );
};

export default Container;