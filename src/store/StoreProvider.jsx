import { createContext, useReducer, useContext } from "react";
import { initialState, reducer } from "./reducer";

const StoreContext = createContext();

export default function StoreProvider({ children }) {
    const [store, dispatch] = useReducer(reducer, initialState);
    return (
        <StoreContext.Provider value={[store, dispatch]}>
            {children}
        </StoreContext.Provider>
    )
}

export function useStore() {
    const store = useContext(StoreContext)
    if (!store){
        throw new Error("Store is not initialized")
    }
    return store;
}

