import React,{FC} from 'react';
import { AvatarWrapper } from './Style';



const src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsZlBPUPcjza4URJJtiOMAj-nkUuIcgJw4BwQKD0xVyw&s"

const Avatar:FC<{width?:string,height?:string,imgSrc?:string}> = ({width="50px",height="50px",imgSrc = src}) => {
    return (
        <AvatarWrapper style={{width,height}}>
            <img src={imgSrc} alt="Hamza Manzoor" />
        </AvatarWrapper>
    );
};

export default Avatar;