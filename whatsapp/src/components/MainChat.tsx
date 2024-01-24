<<<<<<< Updated upstream
import React from 'react';
import { MainChatWrapper } from './style';
import NabvBar from './NabvBar';
import ConnectionBar from './ConnectionBar';

const MainChat = () => {
    
    return (
        <MainChatWrapper>
            <div className='left-side-section'>
<NabvBar/>
<ConnectionBar/>
            </div>
            <div className='right-side-section'>
right
            </div>
        </MainChatWrapper>
    );
=======
import React from "react";
import { MainChatWrapper } from "./style";
import NabvBar from "./NabvBar";
import ConnectionBar from "./ConnectionBar";
import User from "./Users";
import Section from "./Section";

type userData = {
  name: string;
  img: string;
>>>>>>> Stashed changes
};

const UserData: userData[] = [
  {
    name: "Veronica Burns",
    img: "https://i.pravatar.cc/150?u" + crypto.randomUUID(),
  },
  {
    name: "Olivia Casey",
    img: "https://i.pravatar.cc/150?u" + crypto.randomUUID(),
  },
  {
    name: "Nick Farmer",
    img: "https://i.pravatar.cc/150?u" + crypto.randomUUID(),
  },
  {
    name: "Bernadette Singleton",
    img: "https://i.pravatar.cc/150?u" + crypto.randomUUID(),
  },
  {
    name: "Ramona Floyd",
    img: "https://i.pravatar.cc/150?u" + crypto.randomUUID(),
  },
  {
    name: "Michelle Lucas",
    img: "https://i.pravatar.cc/150?u" + crypto.randomUUID(),
  },
  {
    name: "Van Wright",
    img: "https://i.pravatar.cc/150?u" + crypto.randomUUID(),
  },
];

const MainChat = () => {
  return (
    <MainChatWrapper>
      <div className="left-side-section">
        <NabvBar />
        <ConnectionBar />
        <div>
          {UserData.map((user) => (
            <User name={user.name} img={user.img}/>
          ))}
        </div>
      </div>
      <div className="right-side-section">
        <Section />
      </div>
    </MainChatWrapper>
  );
};

export default MainChat;
