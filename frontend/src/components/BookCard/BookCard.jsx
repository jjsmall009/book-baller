import { useEffect } from "react";

const BookCard = () => {
    return (
        <div className="book-card">
            <img src="" alt="cover image" />
            <div className="book-info">
                <p className="title">The Eye of the World</p>
                <p className="author">Robert Jordan</p>
                <p className="description">This is a good book. Read it.</p>
            </div>
        </div>
    );
};

export default BookCard;
