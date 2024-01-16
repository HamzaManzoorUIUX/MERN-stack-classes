import React, { FC } from 'react';
import styled from 'styled-components';

const ProgressBar:FC<{progress:number}> = ({progress}) => {
    const ProgressBarWrapper=styled.div`
    background-color: #282e31;
    height:5px;
    width:100%;
    margin-top:2rem;
    margin-bottom:2rem;
    position: relative;
    oveflow:hidden;
    span{
        position: absolute;
        top:0;
        left:0;
        height:100%;
        width:${progress}%;
        background-color: #6c7175;
        transition: width 0.5s ease;
    }
    `;
    return (
        <ProgressBarWrapper>
            <span/>
        </ProgressBarWrapper>
    );
};

export default ProgressBar;