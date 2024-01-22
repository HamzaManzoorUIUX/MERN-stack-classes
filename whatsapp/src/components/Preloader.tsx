import React, { FC, useEffect, useRef, useState } from 'react';
import { FaWhatsapp } from "react-icons/fa6";
import ProgressBar from './ProgressBar';
import { FaLock } from "react-icons/fa";
import { PreloaderWrapper } from './Style';
const Preloader:FC<{speedToHide:number}> = ({speedToHide}) => {
    const [preloaderVal,setPreloaderValue]=useState(0)
    const ref=useRef<any>()


    useEffect(()=>{
        ref.current=setInterval(()=>{
            setPreloaderValue(pre=>pre+1)
        },(speedToHide-1)*10)
    },[])
    useEffect(()=>{
        if(preloaderVal>=100)
            clearInterval(ref.current)
    },[preloaderVal])
    console.log('preloaderVal',preloaderVal);
    
    return (
        <PreloaderWrapper>
            <div className='main-content'>
            <FaWhatsapp style={{width:"75px",height:"75px",color:"#6c7175"}} />
            <ProgressBar progress={preloaderVal}/>
            <h3>
                WhatsApp
            </h3>
            <p>
            <FaLock/> 
            <span>
                End-to-end encryption. Build by <a href="http://hamzamanzoor.com" target="_blank" rel="noreferrer">Hamza Manzoor</a>
            </span>
            </p>
            </div>
        </PreloaderWrapper>
    );
};

export default Preloader;