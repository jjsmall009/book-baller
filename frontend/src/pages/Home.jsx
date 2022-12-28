// Landing page entry point for the site

import { Link } from "react-router-dom";

import bookImage from "../assets/6920932.png";
import info1 from "../assets/info1.svg";
import info2 from "../assets/info2.svg";
import info3 from "../assets/info3.svg";

const Home = () => {
    return (
        <main>
            <section className="hero-zone">
                <div className="hero container">
                    <div className="hero-text">
                        <h1>A modern reading tracker app</h1>
                        <p>
                            Keep track of what you read with this simple yet
                            powerful platform
                        </p>
                    </div>
                    <img src={bookImage} alt="stack of books" />
                </div>
            </section>

            <section className="info-zone container">
                <h2>How it works</h2>
                <p className="info-zone-blurb">
                    Getting started takes no time at all
                </p>

                <div className="info-card">
                    <div className="card-text">
                        <h3 className="step-title">Create an Account</h3>
                        <p className="step-blurb">
                            Sign up for a free account. No tracking. No selling
                            your data. Just books.
                        </p>
                    </div>
                    <img
                        src={info1}
                        alt="create an account image"
                        className="info-img"
                    />
                </div>
                <div className="info-card">
                    <div className="card-text">
                        <h3 className="step-title">Search for Books</h3>
                        <p className="step-blurb">
                            Add books to your profile by using the built-in
                            search tool that pulls data from Google Books.
                        </p>
                    </div>
                    <img
                        src={info2}
                        alt="search for books image"
                        className="info-img"
                    />
                </div>
                <div className="info-card">
                    <div className="card-text">
                        <h3 className="step-title">Stay Organized</h3>
                        <p className="step-blurb">
                            Your books show up on your profile and will let you
                            quickly see what you've been reading.
                        </p>
                    </div>
                    <img
                        src={info3}
                        alt="your books overview image"
                        className="info-img"
                    />
                </div>
            </section>

            <section className="cta container">
                <h2>Ready to get started?</h2>
                <p>
                    Use the button below to sign up and start tracking your
                    reading today.
                </p>
                <Link to="/signup">
                    <button className="cta-button">Get Started</button>
                </Link>
            </section>
        </main>
    );
};

export default Home;
