import React from 'react';
import styled from "styled-components";
import { FaWhatsapp } from "react-icons/fa6";
import ProgressBar from './ProgressBar';
import { FaLock } from "react-icons/fa";
const Preloader = () => {
    const PreloaderWrapper=styled.section`
    background-color:#121c21;
    color:white;
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
    position:fixed;
    width:100%;
    padding:1rem;
    .main-content{
        display:flex;
        align-items:center;
        justify-content:center;
        flex-direction:column;
        max-width:550px;
        width:100%;
        flex:1;
    }
    p{
        margin-top:0px;
    }
    a{
        color:white;
        text-decoration:none;
    }
    `
    return (
        <PreloaderWrapper>
            <div className='main-content'>
            <FaWhatsapp style={{width:"75px",height:"75px",color:"#6c7175"}} />
            <ProgressBar progress={20}/>
            <h3>
                WhatsApp
            </h3>
            <p>
<FaLock/> <span>
    End-to-end encryption. Build by <a href="http://hamzamanzoor.com" target="_blank" rel="noreferrer">Hamza Manzoor</a>
</span>
            </p>
            </div>
        </PreloaderWrapper>
    );
};

export default Preloader;