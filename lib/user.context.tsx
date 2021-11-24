import React, {createContext, useState} from "react";
import User from "../types/user";

const UserContext = createContext<{
    user: User | undefined;
    setUser: (u: User | undefined) => void
}>({
    user: undefined,
    setUser: () => {
    }
})

export const UserProvider = ({children}: any) => {
    const [user, setUser] = useState<User | undefined>(undefined)

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => React.useContext(UserContext);

export default UserContext;
