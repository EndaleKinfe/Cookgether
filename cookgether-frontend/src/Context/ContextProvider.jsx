import { createContext, useContext, useEffect, useState } from "react";
import axiosClient from "../axios-client";

const StateContext = createContext(
    {
        user: null,
        token: null,
        setToken: () =>{},
        setUser : () =>{}
    }
);


export const ContextProvider = ({children}) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
    const [token, _setToken] = useState(localStorage.getItem("ACCESS_TOKEN"))
    useEffect(()=>{
        axiosClient.get("/user")
        .then((response)=>{
            setUser(response.data);
            localStorage.setItem("user", JSON.stringify(response.data));
        })
    },[])
    function setToken(tokenn){
        
        _setToken(tokenn)
        if(tokenn){
        
            localStorage.setItem("ACCESS_TOKEN", tokenn);
        }
        else{
            
            localStorage.removeItem("ACCESS_TOKEN");
        }
    }
    return (
        <StateContext.Provider value={{
            user,
            token,
            setUser,
            setToken,
        }}>
            {children}
        </StateContext.Provider>
    );
}
export const useStateContext = () => useContext(StateContext);