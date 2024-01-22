import Avatar from "./Avatar";
import { UserWrapper } from "./Style";

interface UserTypes {
  name?: string;
  img?: string;
  time?: string;
  count?: number;
  message?: string;
}

const User = ({
  name = "John Smith",
  img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsZlBPUPcjza4URJJtiOMAj-nkUuIcgJw4BwQKD0xVyw&s",
  message = "Testing",
  time = new Date().toLocaleString([], {
    hour: "2-digit",
    minute: "2-digit",
  }),
  count = 1,
}: UserTypes) => {
  return (
    <UserWrapper>
      <Avatar width="60px" />
      <div className="content">
        <div className="name_time">
          <p>{name}</p>
          <p className="message_time">{time}</p>
        </div>
        <div className="message_time">
          <p >{message}</p>
          <p className="count">{count}</p>
        </div>
      </div>
    </UserWrapper>
  );
};

export default User;
