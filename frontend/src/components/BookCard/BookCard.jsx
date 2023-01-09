// Book card
import { useAuthContext } from "../../hooks/useAuthContext";

const BookCard = ({ props, callback }) => {
    const { user } = useAuthContext();

    const handleDelete = async () => {
        const response = await fetch("/api/user/" + props._id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ user }),
        });
        const json = await response.json();

        if (response.ok) {
            callback(json._id);
            console.log("Book deleted ->");
        }
    };

    return (
        <div className="book-card">
            <img
                src={`https://covers.openlibrary.org/b/id/${props.cover_i}-M.jpg`}
                alt="cover image"
            />
            <div className="book-info">
                <p className="title">{props.title}</p>
                <p className="author">{props.author}</p>
                <p className="year">{props.year}</p>
                <p className="description">{props.description}</p>
                <span onClick={handleDelete}>delete</span>
            </div>
        </div>
    );
};

export default BookCard;
