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
export { MainChatWrapper, PreloaderWrapper, NavBarWrapper, AvatarWrapper }