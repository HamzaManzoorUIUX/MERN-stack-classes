import { InputSearchWrapper } from "./Style";
import { FaSearch } from "react-icons/fa";

const InputSearch = () => {
 return (
  <InputSearchWrapper>
  <div>
   <p><FaSearch /></p>
   <input type="text" placeholder="Search or start a new chat"/>
  </div>
  </InputSearchWrapper>
 );
};

export default InputSearch;