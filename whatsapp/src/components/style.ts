import styled from "styled-components";



const MainChatWrapper = styled.main`
  display: flex;
  .left-side-section{
    width: 30%;
    height: 100vh;
    background-color: #323739;
    border-right:1px solid #3b4248;
  }
  .right-side-section{
    width: 70%;
    height: 100vh;
    background-color: #262d31;
  }
`;
const PreloaderWrapper = styled.section`
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
const NavBarWrapper = styled.nav`
padding:0.25rem .5rem;
display:flex;
justify-content:space-between;
align-items:center;
.nav-icons{
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding-right:1rem;
    button{
        background-color:transparent;
        border:none;
        outline:none;
        cursor:pointer;
        color:#919191;
        padding:0.125rem 0.5rem; 
        svg{
            width:25px;
            height:25px;
        }

    }
}
`
const AvatarWrapper = styled.div`
overflow:hidden;
border-radius:50%;
border:1px solid #3b4248;
img{
    width:100%;
    height:100%;
    object-fit:cover;
}

`

const GlobalStyles = styled.div`
  * {
    @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
    font-family: "Roboto", sans-serif;
  }

  body {
    margin: 0;
  }
`;

const LogoWrapper = styled.section`
  background-color: #262d31;
  width: 70%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;

  .Logo {
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    margin: auto;

    img {
      height: 300px;
      max-width: 550px;
    }
  }

  .Data,
  .Data-1,
  .Data-2,
  .Data-3 {
    display: flex;
    justify-content: center;
    width: 100%;
    color: white;

    p {
      margin: 0;
    }
  }

  .Data {
    margin-top: 25px;
    p {
      font-size: 32px;
      color: #d7d9db;
      line-height: 3.5rem;
    }
  }

  .Data-1 {
    margin: 0;
    line-height: 24px;

    p {
      font-size: 14px;
      color: #99958f;
    }
  }

  .Data-2,
  .Data-3 {
    p {
      font-size: 14px;
      color: #99958f;
    }
  }

  .Data-3 {
    margin-top: 2rem;
  }
`;


export { MainChatWrapper, PreloaderWrapper, NavBarWrapper, AvatarWrapper, GlobalStyles, LogoWrapper }