import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
    return (
        <header>
            <div className="nav-container">
                <Link to="/">
                    <p className="logo">Book Baller</p>
                </Link>
                <nav>
                    <Link to="/about">About</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/signup" className="signup-button">
                        Signup
                    </Link>
                </nav>
            </div>
        </header>
    );
}
