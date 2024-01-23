import { WifiOptionWrapper } from "./Style";
import { MdOutlineSignalWifi4Bar } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";


const WifiOption = () => {
 const[visible,setVisible]=useState(true)
 
const handleClose = () => {
  setVisible(false);
}

  return (
    <WifiOptionWrapper>
      
      <div className=" upp" style={{display:visible? 'block':'none'}}>
      <p className="close" onClick={handleClose}><IoMdClose /></p> 
      <div className="big">
        <div className="icon">
        <p><MdOutlineSignalWifi4Bar /></p>
        </div>
        <div className="five">
          <h5>No Contacts</h5>
          <div className="atag">
            <p>You can import contact from google</p>
            <a href="">Learn more.</a>
          </div>
        </div>
      </div>
      </div>
    </WifiOptionWrapper>
  );
};

export default WifiOption;