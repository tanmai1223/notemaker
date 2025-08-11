import { createContext, useState } from "react";


const AuthContext=createContext();

const AuthProvider=({children})=>{
    const userDetails=localStorage.getItem('user')
    const [user,setUser]=useState(userDetails ?? null);
    
    const login=(userDetails)=>{
        setUser(userDetails)
        localStorage.setItem('user',JSON.stringify(userDetails))
    }

    const logout=()=>{
        setUser(null)        
        localStorage.removeItem('user')

    }

    return <AuthContext.Provider value={{user,login,logout}}>{children}</AuthContext.Provider>
}
export {AuthContext,AuthProvider}