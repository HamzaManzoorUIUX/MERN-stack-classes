import { WifiOptionWrapper } from "./Style";
import { MdOutlineSignalWifi4Bar } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const WifiOption = () => {
  return (
    <WifiOptionWrapper>
      
      <div className=" upp">
      <p className="close"><IoMdClose /></p> 
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