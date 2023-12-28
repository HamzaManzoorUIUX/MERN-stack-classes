import { Dispatch, FC, ReactElement, SetStateAction, createContext, useState } from "react";
export interface initialStateProps{
    state:string,
    apiData:string[]
    newStateChanger:Dispatch<SetStateAction<string>>
    abcAPiCaller:()=>void
}
const initailState:initialStateProps={
    state:"",
    apiData:[],
    newStateChanger:()=>{},
    abcAPiCaller:()=>{}
}
const GlobalContext=createContext(initailState)

const ContextProvider:FC<{children:ReactElement|ReactElement[]}>=({children})=>{
    const [state,setState]=useState("Hamza Manzoor")
    const [apiData,setApiData]=useState([])
    const abcAPiCaller=async()=>{
        console.log('api calling...');
        setApiData([])
    }
    return <GlobalContext.Provider value={{state,apiData,newStateChanger:setState,abcAPiCaller}}>
        <div>
        {children}
            <nav>
                this is nav bar of
            </nav>
        </div>
    </GlobalContext.Provider>
}
export {ContextProvider,GlobalContext}