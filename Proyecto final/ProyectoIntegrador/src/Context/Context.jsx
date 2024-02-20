import { createContext, useContext, useReducer, useEffect } from "react";
import { reducer } from "../Reducer/Reducer";
import axios from "axios";

const VehiculosState = createContext()

const initialState = {
    list: []
}

const Context = ({children}) => {

    const[state, dispatch] = useReducer(reducer, initialState)

    const apiKey = ''
    const url = '' 
    

    useEffect(() =>{

       
    }, [])

    return(
        <VehiculosState.Provider value={{state, dispatch}}>
            {children}
        </VehiculosState.Provider>
    )

}

export default Context

export const useVehiculosState =() => useContext(VehiculosState)

