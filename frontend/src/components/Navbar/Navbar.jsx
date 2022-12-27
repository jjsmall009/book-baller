import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
    return (
        <header>
            <Link to="/">
                <h1>Book Baller</h1>
            </Link>
            <nav>
                <Link to="/about">About</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup" className="signup-button">
                    Signup
                </Link>
            </nav>
        </header>
    );
}
