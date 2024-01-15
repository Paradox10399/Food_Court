import React, { useReducer, useContext, createContext } from "react";
import { CLOSE_SIDEBAR, OPEN_SIDEBAR } from "../actions/actions";
import Reducer from '../Reducers/SidebarReducer'

const initialState = {
    isSidebarOpen : false,
}

const sidebarContext = createContext({})

export const SidebarProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState)

    const openSidebar = () => {
        dispatch({ type: OPEN_SIDEBAR });
    }

    const closeSidebar = () => {
        dispatch({ type: CLOSE_SIDEBAR });
    }

    return (
        <sidebarContext.Provider value={{
            ...state,
            openSidebar,
            closeSidebar,
        }}>
            {{ children }}
        </sidebarContext.Provider>
    )
}

export const useSidebarContext = () => {
    return useContext(sidebarContext);
}