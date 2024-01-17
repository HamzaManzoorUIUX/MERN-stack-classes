import { productsPagginationProps, productsProps } from "./GlobalContext"

const reducer = (state: productsPagginationProps, actions: { type: string, data: any }) => {
    switch (actions.type) {
        case "+":
            return {
                ...state,products:state.products.map(obj=>obj.id===actions.data?({...obj,counter:obj.counter+1}):obj)
            }
        case "-":
            return {
                ...state,products:state.products.map(obj=>obj.id===actions.data?({...obj,counter:obj.counter-1}):obj)
            }
        case "store":
            return {...actions.data,products:actions.data.products.map((obj:productsProps)=>({...obj,counter:1}))}
        default:
            return state
    }
}
export default reducer