import { Link, NavLink } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";

export default function Navbar() {
    const { logout } = useLogout();
    const { user } = useAuthContext();

    const handleClick = () => {
        logout();
    };

    return (
        <header>
            <div className="nav-container">
                <Link to="/">
                    <p className="logo">Book Baller</p>
                </Link>
                <nav>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/help">Help</NavLink>
                    {user && (
                        <>
                            <NavLink to="/my_books">{user.username}'s Books</NavLink>
                            <NavLink to="/" onClick={handleClick} className="signup-button">Log out</NavLink>
                        </>
                    )}
                    {!user && (
                        <>
                            <NavLink to="/login">Login</NavLink>
                            <NavLink to="/signup" className="signup-button">Signup</NavLink>
                        </>
                    )}
                </nav>
            </div>
        </header>
    );
}
