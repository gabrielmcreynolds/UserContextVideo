import {useUser} from "../lib/user.context";

const Header = () => {
    const {user} = useUser();
    return (
        <header className="min-w-full bg-blue-400">
            <div>{user ? user.name : "no user"}</div>
        </header>
    );
};

export default Header;
