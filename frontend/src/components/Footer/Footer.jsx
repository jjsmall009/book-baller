// Footer component for all pages
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        // <footer className="container">
        //     <p>© 2022 Book Baller Inc.</p>
        //     <div className="footer-links">
        //         <Link to="">Terms of Services</Link>
        //         <Link to="">Privacy Policy</Link>
        //     </div>
        // </footer>
        <footer>
            <div className="footer">
                <p>BookBaller.com</p>
                <div className="row">
                    <ul>
                        <li>
                            <a href="#">Contact us</a>
                        </li>
                        <li>
                            <a href="#">Our Services</a>
                        </li>
                        <li>
                            <a href="#">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#">Terms & Conditions</a>
                        </li>
                        <li>
                            <a href="#">Career</a>
                        </li>
                    </ul>
                </div>

                <div className="row">
                    Book Baller © 2022 JJ Small - All rights reserved ||
                    Designed By: Me
                </div>
            </div>
        </footer>
    );
}
