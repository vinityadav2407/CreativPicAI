import { createContext, useState } from "react";
import Navbar from "../components/Navbar";

export const AppContext=createContext();

const AppContextProvider=(props)=>{

     let [user ,setUser]=useState(null);
     let value={
        user,setUser
     }
     return(
        
        <AppContext.Provider value={value}>
              {props.children}
        </AppContext.Provider>
     );
}
export default AppContextProvider;