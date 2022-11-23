import React,{ createContext, useReducer} from "react";
import { CartReducer } from './CartReducer';
 

export const CartContext = createContext();

const Storage=localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
const initialstate={ cartItems:Storage }
    
const CartContextProvider=({children})=>{

    const [state, dispatch]= useReducer(CartReducer,initialstate);
    const addProduct=payload=>{
        debugger;
        dispatch({type:'ADD',payload});
        return state.cartItems;
    }
    const removeProduct=payload=>{
        dispatch({type:'REMOVE',payload});
        return state.cartItems;
    }
    const incrProduct=payload=>{
        dispatch({type:'INCR',payload});
        return state.cartItems;
    }
    const decrProduct=payload=>{
        dispatch({type:'DECR',payload});
        return state.cartItems;
    }
    const cleanProduct= ()=>{
        dispatch({type:'CLEAR',payload:undefined});
        return state.cartItems;
    }
    const getCartItems = ()=>{
        return state.cartItems;
    }
    const contextValues={
        addProduct,
        removeProduct,
        incrProduct,
        decrProduct,
        cleanProduct,
        getCartItems,
        ...state
    }
    
    return(   <CartContext.Provider value={contextValues}>
        {children}</CartContext.Provider> 
)}
export default CartContextProvider;