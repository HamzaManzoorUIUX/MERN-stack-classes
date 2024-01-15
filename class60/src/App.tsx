import React from 'react';
import useFetchApi from './useFetchApi';

const App = () => {
  const [abc,state2,url]=useFetchApi("https://dummyjson.com/products","https://dummyjson.com/products/1")
  console.log('url',url);
  console.log('state2',state2);
  
  
  return (
    <div>
      {
        abc.products?.map((obj:any)=><div key={obj.id}>{obj.title}</div>)
      }
    </div>
  );
};

export default App;