// Book card
const BookCard = ({ props }) => {
    return (
        <div className="book-card">
            <img src={`https://covers.openlibrary.org/b/id/${props.cover_i}-M.jpg`} alt="cover image" />
            <div className="book-info">
                <p className="title">{props.title}</p>
                <p className="author">{props.author}</p>
                <p className="year">{props.year}</p>
                <p className="description">{props.description}</p>
            </div>
        </div>
    );
};

export default BookCard;
