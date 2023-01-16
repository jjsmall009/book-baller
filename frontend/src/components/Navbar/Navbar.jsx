import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";

import bookImg from "../../assets/manual.png";

export default function Navbar() {
    const { logout } = useLogout();
    const { user } = useAuthContext();
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    const handleClick = () => {
        logout();
    };

    return (
        <header>
            <div className="nav-container">
                <Link to="/" className="logo-zone">
                    <img src={bookImg} className="logo-img" />
                    <p className="logo">Book Baller</p>
                </Link>

                <svg
                    className="hamburger"
                    viewBox="0 0 100 80"
                    width="30"
                    height="30"
                    onClick={() => {
                        setIsNavExpanded(!isNavExpanded);
                    }}
                >
                    <rect width="100" height="20" rx="10"></rect>
                    <rect y="30" width="100" height="20" rx="10"></rect>
                    <rect y="60" width="100" height="20" rx="10"></rect>
                </svg>

                <nav className={isNavExpanded ? "nav-mobile" : "nav-expanded"}>
                    <NavLink
                        to="/about"
                        onClick={() => {
                            setIsNavExpanded(false);
                        }}
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="*"
                        onClick={() => {
                            setIsNavExpanded(false);
                        }}
                    >
                        Contact
                    </NavLink>
                    <NavLink
                        to="/help"
                        onClick={() => {
                            setIsNavExpanded(false);
                        }}
                    >
                        Help
                    </NavLink>
                    {user && (
                        <>
                            <NavLink
                                to="/my_books"
                                onClick={() => {
                                    setIsNavExpanded(false);
                                }}
                            >
                                {user.username}'s Books
                            </NavLink>
                            <NavLink
                                to="/"
                                onClick={handleClick}
                                className="signup-button"
                            >
                                Log out
                            </NavLink>
                        </>
                    )}
                    {!user && (
                        <>
                            <NavLink
                                to="/login"
                                onClick={() => {
                                    setIsNavExpanded(false);
                                }}
                            >
                                Login
                            </NavLink>
                            <NavLink
                                to="/signup"
                                className="signup-button"
                                onClick={() => {
                                    setIsNavExpanded(false);
                                }}
                            >
                                Signup Now
                            </NavLink>
                        </>
                    )}
                </nav>
            </div>
        </header>
    );
}
