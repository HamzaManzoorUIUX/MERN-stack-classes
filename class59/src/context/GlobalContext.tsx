import axios from "axios";
import { Dispatch, FC, ReactElement, SetStateAction, createContext, useState } from "react";
export interface productsProps{
id:number,
title:string,
description:string
descount:number
brand:string
category:string
images:string[]
price:number
rating:number
stock:number
thumbnail:string
}
export interface productsPagginationProps{
    products:productsProps[]
    limit:number
    skip:number
    total:number
}
export interface initialStateProps{
    state:productsPagginationProps,
    apiData:string[]
    setState:Dispatch<SetStateAction<{
        products: never[];
        limit: number;
        skip: number;
        total: number;
    }>>
    abcAPiCaller:()=>void
}
const initailState:initialStateProps={
    state:{
        products:[],
        limit:0,
        skip:0,
        total:0
    },
    apiData:[],
    setState:()=>{},
    abcAPiCaller:()=>{}
}
const GlobalContext=createContext(initailState)

const ContextProvider:FC<{children:ReactElement|ReactElement[]}>=({children})=>{
    const [state,setState]=useState({
        products:[],
        limit:0,
        skip:0,
        total:0
    })
    const [apiData,setApiData]=useState([])
    const abcAPiCaller=async()=>{
        const response=await axios.get('https://dummyjson.com/products')
        setState(response.data)
    }
    return <GlobalContext.Provider value={{state,apiData,setState,abcAPiCaller}}>
        <div>
        {children}
            <nav>
                this is nav bar of
            </nav>
        </div>
    </GlobalContext.Provider>
}
export {ContextProvider,GlobalContext}