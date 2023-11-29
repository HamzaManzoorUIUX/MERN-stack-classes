import React from 'react';

const App = () => {
 const data=[
  {
    name:"hamza",
    id:"sampleCard1",
    img:"./logo192.png",
    details:"Hamza is a teacher"
  },
  {
    name:"hamza",
    id:"sampleCard2",
    img:"./logo192.png",
    details:"Hamza is a student"
  },
  {
    name:"Tahir",
    id:"sampleCard3",
    img:"./logo512.png",
    details:"Tahir is a unknown person"
  },
 ]
  return (
    <div className='border-right-container'>
    {
      (data.map((obj)=><div key={obj.id} className='border-right-container-item'>
      <div>
      <img src={obj.img} alt="" />
      <p>
      {obj.details}
      </p>
      </div>
      </div>))
    }
    </div>
  );
};

export default App;