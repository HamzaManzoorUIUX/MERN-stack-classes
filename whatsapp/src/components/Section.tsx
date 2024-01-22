import React from "react";
// import "../assets/scss/index.scss";
import Logo from "../assets/svg/Logo.png";
// import styled, { createGlobalStyle } from "styled-components";
import { GlobalStyles, LogoWrapper } from "./Style";

// const GlobalStyles = createGlobalStyle`
//   * {
//     @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
//     font-family: "Roboto", sans-serif;
//   }

//   body {
//     margin: 0;
//   }
// `;

// const LogoWrapper = styled.section`
//   background-color: #262d31;
//   width: 70%;
//   height: 100vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   color: white;

//   .Logo {
//     position: relative;
//     display: flex;
//     justify-content: center;
//     width: 100%;
//     margin: auto;

//     img {
//       height: 300px;
//       max-width: 550px;
//     }
//   }

//   .Data,
//   .Data-1,
//   .Data-2,
//   .Data-3 {
//     display: flex;
//     justify-content: center;
//     width: 100%;
//     color: white;

//     p {
//       margin: 0;
//     }
//   }

//   .Data {
//     margin-top: 25px;
//     p {
//       font-size: 32px;
//       color: #d7d9db;
//       line-height: 3.5rem;
//     }
//   }

//   .Data-1 {
//     margin: 0;
//     line-height: 24px;

//     p {
//       font-size: 14px;
//       color: #99958f;
//     }
//   }

//   .Data-2,
//   .Data-3 {
//     p {
//       font-size: 14px;
//       color: #99958f;
//     }
//   }

//   .Data-3 {
//     margin-top: 2rem;
//   }
// `;

const Section = () => {
  return (
    <>
      <GlobalStyles />
      <LogoWrapper>
        <div className="Logo-section">
          <div className="Logo">
            <img src={Logo} alt="" />
          </div>
          <div className="Data">
            <p>Whatsapp Web</p>
          </div>
          <div className="Data-1">
            <p>Send and receive messages without keeping your phone Online</p>
          </div>
          <div className="Data-2">
            <p>
              Use Whatsapp up to 4 linked devices and 1 phone at the same time
            </p>
          </div>
          <div className="Data-3">
            <p>Built by Jazim Abbas❤️</p>
          </div>
        </div>
      </LogoWrapper>
    </>
  );
};

export default Section;
