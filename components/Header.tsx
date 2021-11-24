import {useUser} from "../lib/user.context";

const Header = () => {
    const {user, loading} = useUser();
    return (
        <header className="min-w-full bg-blue-400">
            <div>{loading ? "loading..." : user ? user.name : "no user"}</div>
        </header>
    );
};

export default Header;
