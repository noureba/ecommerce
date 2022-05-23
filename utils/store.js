import React, {createContext, useReducer, useState} from "react";

export const Store = createContext()

const initial = {
    mode: false,
}


function reducer(state, action){

    switch(action.type){
        case 'ON':
            return {...state.mode, mode: true}
        case 'OFF':
            return {...state.mode, mode: false}
        default:
            return state.mode
    }
}

export function StoreProvider(props){
    const [state, dispatch] = useReducer(reducer, initial)
    const [cartItems, setCartItems]  = useState([])


    
    const value = {state, dispatch, cartItems, setCartItems}

    return(
        <Store.Provider value={value}>
            {props.children}
        </Store.Provider>
    )
}