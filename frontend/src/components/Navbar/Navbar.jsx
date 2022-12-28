import { Link, NavLink } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
    return (
        <header>
            <div className="nav-container">
                <Link to="/">
                    <p className="logo">Book Baller</p>
                </Link>
                <nav>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/login">Login</NavLink>
                    <NavLink to="/signup" className="signup-button">
                        Signup
                    </NavLink>
                </nav>
            </div>
        </header>
    );
}
