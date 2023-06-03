import React, { useContext, useReducer } from "react";

const AuthStateContext = React.createContext()
const AuthDisptachrContext = React.createContext()

export function useAuthState(){
    const context = useContext(AuthStateContext)
    if (!context) {
        throw Error("useAuthState must be used with a AuthProvider!")
    }
    return context;
}

export function useAuthDispatch(){
    const context = useContext(AuthDisptachrContext)
    if (!context) {
        throw Error("useAuthDispatch must be used with a AuthProvider!")
    }
    return context;
}

export function AuthProvider({ children }) {
    const [state, dispach] = useReducer(reducer, initalState)
    return (
        <AuthStateContext.Provider value={state}>
            <AuthDisptachrContext value={dispach}>
            {children}
            </AuthDisptachrContext>
        </AuthStateContext.Provider>
    )
}