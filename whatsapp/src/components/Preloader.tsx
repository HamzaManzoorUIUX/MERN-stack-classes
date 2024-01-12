import React from 'react';
import styled from "styled-components";
import { FaWhatsapp } from "react-icons/fa6";
const Preloader = () => {
    const PreloaderWrapper=styled.section`
    background-color:#121c21;
    color:white;
    display:flex;
    height:100vh;
    align-items:center;
    justify-content:center;
    position:fixed;
    width:100%;
    `
    return (
        <PreloaderWrapper>
            <FaWhatsapp />
            <div className='d-flex'>
            Home
            </div>
        </PreloaderWrapper>
    );
};

export default Preloader;