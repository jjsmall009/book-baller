// Landing page entry point for the site

import BookCard from "../components/BookCard/BookCard";

const Home = () => {
    return (
        <main>
            <h1>Welcome to Book Baller</h1>
            <p>
                Book Baller is a simple yet powerful reading tracker web app that allows you to keep
                track of what they are reading.
            </p>

            <div className="book-zone">
                <BookCard />
                <BookCard />
            </div>
        </main>
    );
};

export default Home;
