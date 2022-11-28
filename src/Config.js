import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Context = React.createContext();

const ContextProvider = ({children}) => {
    const [user,setUser] = useState();
    const history = useNavigate();

    useEffect(() => {
        const call = async () => {
        // use effect triggers on path change if data is not getting parsed from local storage then user will be redirected to Login screen
        const userValue = await JSON.parse(localStorage.getItem("user"));
        if(!userValue){
            history("/");
        }
        await setUser(userValue);
        }
        call();
    },[history])

    return <Context.Provider value={{user,setUser}}>
        {children}
    </Context.Provider>
}

export const ContextConsumer = () => {
    return useContext(Context);
}


export default ContextProvider;