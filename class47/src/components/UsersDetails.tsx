import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UsersDetails = () => {
    const [data,setData]=useState<{
        limit:number
        products:any[]
        skip:number
        total:number
    }|undefined>()
    const getProductsData=async()=>{
        try {
            const response=await axios.get('https://dummyjson.com/products')
            setData(response.data);
            
        } catch (error) {
            console.log('error',error);
            
        }
        finally{
            console.log("Hamza");
        }
    }
useEffect(()=>{
    getProductsData()
},[])
    console.log('data',data?.products);
    
    return (
        <div className='products-list'>
            {
                data?.products?.map(obj=>{
                    return <div className='products-list-item'>
                        <div className="media">
                        <img src={obj.thumbnail} alt={obj.title} />
                        </div>
                    </div>
                })
            }
        </div>
    );
};

export default UsersDetails;