import styled from "styled-components";
const WifiOptionWrapper = styled.main`
 .upp{
    background-color:#085373;
    height:100px;
    line-height:6px;
    position:relative;
 }
 .close{
  cursor:pointer;
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
 left:560px;
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


export { InputSearchWrapper, WifiOptionWrapper }