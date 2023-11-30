import axios from 'axios';
import React, { useEffect, useState } from 'react';

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
            state?.map((obj,index)=><tr>
              <td>{index+1}</td>
<td>
  {obj["first_name"]}
</td>
<td>
  {obj["last_name"]}
</td>
<td>
  {obj["company_name"]}
</td>
<td>
  {obj["address"]}
</td>
<td>
  {obj["city"]}
</td>
<td>
  {obj["county"]}
</td>
{
              // Object.keys(obj||{}).map(x=><td>{obj[x]}</td>)
}
            </tr>)
          }
        </tbody>
      </table>
    </div>
  );
};

export default App;