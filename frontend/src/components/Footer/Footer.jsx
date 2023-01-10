// Footer component for all pages
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer>
            <div className="footer-main">
                <div className="foot-cont">
                    <p className="footer-title">Book Baller</p>
                    <p className="footer-blurb">
                        Book Baller is a simple yet powerful reading tracker web
                        app that allows users to keep track of what they are
                        reading.
                    </p>

                    <ul className="footer-list">
                        <li><a href="#">Terms of Use</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">About Us</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-end">
                <div className="foot-cont">
                    <p>
                        Copyright 2023 by JJ Small - A Cool Guy Making Cool
                        Things
                    </p>
                </div>
            </div>
        </footer>
    );
}
