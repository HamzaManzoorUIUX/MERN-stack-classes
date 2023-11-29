import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { UsersDetailsProps, mianUserDetailsProps } from '../config/types';

const UsersDetails = () => {
    const [data,setData]=useState<undefined|mianUserDetailsProps>()
    const getProductsData=async()=>{
        try {
            const response=await axios.get('https://dummyjson.com/products')
            setData(response.data);
            
        } catch (error) {
            console.log('error',error);
            
        }
    }
useEffect(()=>{
    getProductsData()
},[])
    console.log('data',data);
    
    return (
        <div className='products-list'>
            {
                data?.products?.map((obj:UsersDetailsProps)=>{
                    return <ProductCard key={obj.id} data={obj}/>
                })
            }
        </div>
    );
};

export default UsersDetails;