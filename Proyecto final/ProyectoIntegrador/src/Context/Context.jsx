import { createContext, useContext, useState } from "react";



const VehiculosState = createContext()



const Context = ({children}) => {
    

    

    return(
        <VehiculosState.Provider value={{}}>
            {children}
        </VehiculosState.Provider>
    )

}

export default Context

export const useVehiculosState =() => useContext(VehiculosState)

