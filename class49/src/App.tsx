import axios from 'axios';
import React, { useEffect, useState } from 'react';

const App = () => {
  const [userCoordiates,setUserCoordiates]=useState<GeolocationPosition>()
  const [weatherData,setWeatherData]=useState()
  const getUserLocation=()=>{
    navigator.geolocation.getCurrentPosition((position)=>setUserCoordiates(position))
  }
  const getWeatherInfo=async()=>{
    try {
            const config={
              headers: { 
                'X-RapidAPI-Key': 'a98d18f47cmsh8e66bad19e6d36dp1475e2jsn01419853b085', 
                'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
              }
              }
      const respose=await axios.get(`https://weatherapi-com.p.rapidapi.com/current.json?q=${userCoordiates?.coords.latitude},${userCoordiates?.coords.longitude}`,config)
      setWeatherData(respose.data);
      
      
    } catch (error) {
      console.log('error',error);
      
    }
  }
  useEffect(()=>{
    getUserLocation()
  },[])
  useEffect(()=>{
if(userCoordiates){
  getWeatherInfo()
}
  },[userCoordiates])
  console.log('weatherData',weatherData);
  
  return (
    <div>
      Get location
    </div>
  );
};

export default App;