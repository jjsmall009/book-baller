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
            <div class="footer">
                <p>BookBaller.com</p>
                <div class="row">
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

                <div class="row">
                    INFERNO Copyright © 2021 Inferno - All rights reserved ||
                    Designed By: Mahesh
                </div>
            </div>
        </footer>
    );
}
