import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UsersDetails = () => {
    const [data,setData]=useState<{
        limit:number
        products:any[]
        skip:number
        total:number
    }|undefined>()
useEffect(()=>{
    axios.get('https://dummyjson.com/products').then(res=>{
    if(res.status===200)    
    {
        setData(res.data);
        
    }
    }).catch(err=>{
        console.log('err',err );
    })
},[])
    console.log('data',data);
    
    return (
        <div className='products-list'>
            {
                data?.products?.map(obj=>{
                    console.log('obj',obj);
                    
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