import axios from "axios";
import {  FC, ReactElement,  createContext, useReducer } from "react";
import reducer from "./GlobalReducer";
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
counter:number
}
export interface productsPagginationProps{
    products:productsProps[]
    limit:number
    skip:number
    total:number
}
export interface initialStateProps{
    state:productsPagginationProps,
    abcAPiCaller:()=>void
    changeCounter:(id:number,indication:string)=>void
}
const initailState:initialStateProps={
    state:{
        products:[],
        limit:0,
        skip:0,
        total:0
    },
    abcAPiCaller:()=>{},
    changeCounter:(id,indication)=>{}
}
const GlobalContext=createContext(initailState)

const ContextProvider:FC<{children:ReactElement|ReactElement[]}>=({children})=>{
    const [state,dispatch]=useReducer(reducer,{
        products: [],
        limit: 0,
        skip: 0,
        total: 0
    });
    const changeCounter=(id:number,indication:string)=>{
        dispatch({type:indication,data:id})

    }
    const abcAPiCaller=async()=>{
        const response=await axios.get('https://dummyjson.com/products')
        dispatch({type:"store",data:response.data})
    }

    return <GlobalContext.Provider value={{state,changeCounter,abcAPiCaller}}>
        <div>
        {children}
            <nav>
                this is nav bar of
            </nav>
        </div>
    </GlobalContext.Provider>
}
export {ContextProvider,GlobalContext}