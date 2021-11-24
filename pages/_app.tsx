import type {AppProps} from 'next/app'
import 'tailwindcss/tailwind.css';
import User from "../types/user";
import {useState} from "react";
import UserContext from '../lib/user.context';

function MyApp({Component, pageProps}: AppProps) {
    const [user, setUser] = useState<User | undefined>(undefined)

    return <UserContext.Provider
        value={{user: user, setUser: setUser}}><Component {...pageProps} />
    </UserContext.Provider>
}

export default MyApp
