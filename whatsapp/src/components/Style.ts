import styled from "styled-components";
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
const LogoWrapper = styled.section`
  background-color: #262d31;
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
const GlobalStyles = styled.div`
  * {
    @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
    font-family: "Roboto", sans-serif;
  }

  body {
    margin: 0;
  }
`;
const UserWrapper = styled.div`
margin: 20px;
display: flex;
// width: 320px;
padding: .5rem;
background-color: #262d31;
color: white;
border: 0.1px solid #919191;
gap: 0.5rem;
p{
    margin: 0;
}
.content{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.name_time{
    display: flex;
    justify-content: space-between;
    width: 100%;
}
.content .message_time{
    font-Size: 12px;
    color: #919191;
}
.count{
    border-radius: 50%;
    color: black;
    background-color: lightgreen;
    width: 15px;
    height: 15px;
    display: flex;
    justify-content: center;
}

`
const WifiOptionWrapper = styled.main`
 background-color:#085373;
 height:100px;
 line-height:6px;
 .upp{
  position:relative;
 }
 .close{
  position:absolute;
  right:6px;
  top:8px;
  margin-top:0px;
  color:#C7D4DB;
  font-weight:bold;
  font-size:25px;
 }
 .big{
  width:100%;
  height:100px;
  display:flex;
  align-items:center;
  justify-content:center;
 }
 .icon{
  margin:0px;
  background-color: #C2D1D8;
  font-size:25px;
  height:50px;
  width:50px;
  display:flex;
  justify-content:center;
  align-items:center;
  border-radius:110px;
 }
 .five{ 
  margin-top:17px;
  margin-left:12px;
  h5{
  margin:0px;
  color:#C7D4DB;
  font-weight:bold;
  font-size:19px;
  }
 }
 .atag{
    display:flex;
   align-items: center;
   color:#8C9AA1;
   font-weight:bold;
   a{
    font-weight:bold;
    color:#8C9AA1;
     margin-left:4px;
   }
 }
 `;
const InputSearchWrapper = styled.main`
margin-top:10px;
div{
 position:relative;
 display: flex;
justify-content:center;
align-items:center;

}
p{
 position:absolute;
 left:30px;
 color:#C2D1D8;
 font-size: 15px;
}
input{
height:35px;
width:380px;
background-color:#323739;
border-radius:10px;
padding-left:34px;
color:white;
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
export { InputSearchWrapper, NavBarWrapper, MainChatWrapper,AvatarWrapper, PreloaderWrapper, WifiOptionWrapper, GlobalStyles, LogoWrapper, UserWrapper }