import { onAuthStateChanged } from "firebase/auth";
import { createContext, useState } from "react";
import { auth } from "../Firebase/firebaseConfig";
import { useEffect } from "react";

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [currentUser ,setCurrentUser] = useState({})

    useEffect(() => {
     const unsub =  onAuthStateChanged(auth,(user) =>{
        setCurrentUser(user);
     
      })
    
      return () => {
        unsub();
      }
    }, []);
    
    return(
        <AuthContext.Provider value={{currentUser}}>
        {children}
    </AuthContext.Provider>
    )
};