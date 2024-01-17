import React,{useEffect,useState} from 'react';
import axios from 'axios';

const useFetchApi = (url:string,url2:string) => {
    const [state,setState]=useState<any>({})
    const [state2,setState2]=useState<any>({})
  const getApiCall=async()=>{
    try {
      const response=await axios.get(url)
    if(response.status===200){
      setState(response.data);
    }
      const response2=await axios.get(url2)
    if(response2.status===200){
      setState2(response2.data);
    }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getApiCall()
  }, [url])
    return [state,state2,url]
};

export default useFetchApi;