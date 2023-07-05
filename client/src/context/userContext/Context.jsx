import { createContext, useEffect, useReducer } from "react";
import Reducer from "./Reducer";
//initial state for user obj
const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem("user")) || null
}
//declare createContext
export const Context = createContext(INITIAL_STATE);
//declare createContext
export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE)
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user))
    }, [state.user])
    return <Context.Provider value={{ user: state.user, dispatch }}>
        {children}
    </Context.Provider>
}