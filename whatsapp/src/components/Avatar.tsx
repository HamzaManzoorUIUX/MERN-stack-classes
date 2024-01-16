import React,{FC} from 'react';
import { AvatarWrapper } from './style';

const Avatar:FC<{width?:string,height?:string}> = ({width="50px",height="50px"}) => {
    return (
        <AvatarWrapper style={{width,height}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsZlBPUPcjza4URJJtiOMAj-nkUuIcgJw4BwQKD0xVyw&s" alt="Hamza Manzoor" />
        </AvatarWrapper>
    );
};

export default Avatar;