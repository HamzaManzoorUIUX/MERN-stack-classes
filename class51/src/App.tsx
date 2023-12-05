import axios from 'axios';
import React, { useEffect, useState } from 'react';
import TableRow from './components/TableRow';

const App = () => {
  const [state,setState]=useState([])
  const getData=async()=>{
    try {
      const response=await axios.get('https://raw.githubusercontent.com/HamzaManzoorUIUX/MERN-stack-classes/main/json/sample.json')
      setState(response.data)
    } catch (error) {
      console.log('error',error);
    }
  }
  const getValue=(values:any)=>{
    console.log("values",values);
    
  }
  useEffect(()=>{
    getData()
  },[])
  console.log(state);
  
  return (
    <div>
      <table className='myTable'>
        <thead>
          <tr>
            <th>#</th>
            {
              Object.keys(state[0]||{}).map(x=><th>{x.replaceAll("_"," ")}</th>)
            }
          </tr>
        </thead>
        <tbody>
          {
            state?.map((obj,index)=><TableRow indexVal={index} getValue={getValue} key={index} data={obj}/>)
          }
        </tbody>
      </table>
    </div>
  );
};

export default App;