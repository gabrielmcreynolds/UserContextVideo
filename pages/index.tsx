import type {NextPage} from 'next'
import Header from "../components/Header";
import {useState} from "react";
import {useUser} from "../lib/user.context";
import User from "../types/user";

const Home: NextPage = () => {
    const {setUser, user} = useUser();
    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    return (
        <>
            <Header/>

            <h1 className="mt-4 text-center text-4xl font-bold">User: {JSON.stringify(user)}</h1>


            <div className="mt-8 mx-8">
                <label htmlFor="name">Name:</label>
                <input name="name" className="mx-4 p-2 bg-gray-200 rounded" type="text" value={name}
                       onChange={(event) => setName(event.target.value)}/>
            </div>

            <div className="mt-8 mx-8">
                <label htmlFor="email">Email:</label>
                <input name="email" className="mx-4 p-2 bg-gray-200 rounded" type="email" value={email}
                       onChange={(event) => setEmail(event.target.value)}/>
            </div>

            <button className="mx-4 mt-4 px-4 py-2 border border-blue-400 rounded" onClick={() => {
                const user: User = {name, email}
                setUser(user)
            }}>Set User
            </button>
        </>
    )
}

export default Home
