import { createContext, useContext } from "react";

const UserContext = createContext();

export function UserProvider({children, user}) {
    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}

export function useUser() {
    // const user = useContext(UserContext);
    // if(!user) console.log("No user found")
    
    return useContext(UserContext);
}