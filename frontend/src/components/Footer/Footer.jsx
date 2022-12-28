// Footer component for all pages
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
    return (
        <footer className="container">
            <p>© 2022 Book Baller Inc.</p>
            <div className="footer-links">
                <Link to="">Terms of Services</Link>
                <Link to="">Privacy Policy</Link>
            </div>
        </footer>
    );
}
