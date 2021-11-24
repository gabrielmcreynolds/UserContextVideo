import React, {createContext, useEffect, useState} from "react";
import User from "../types/user";

const UserContext = createContext<{
    user: User | undefined;
    setUser: (u: User | undefined) => void,
    loading: boolean;
}>({
    user: undefined,
    setUser: () => {
    },
    loading: true,
})

export const UserProvider = ({children}: any) => {
    const [user, setUser] = useState<User | undefined>(undefined)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            const u: User = JSON.parse(`${localStorage.getItem('user')}`);
            setUser(u);
            setLoading(false)
        }, 3000)
    }, [])

    return (
        <UserContext.Provider value={{user, setUser, loading}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => React.useContext(UserContext);

export default UserContext;
