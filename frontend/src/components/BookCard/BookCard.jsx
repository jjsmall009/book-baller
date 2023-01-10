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
            {props.cover_i != "n/a" ? (
                <img
                    src={`https://covers.openlibrary.org/b/id/${props.cover_i}-M.jpg`}
                    alt="cover image"
                />
            ) : (
                <img
                    src={`https://d827xgdhgqbnd.cloudfront.net/wp-content/uploads/2016/04/09121712/book-cover-placeholder.png`}
                    alt="cover image"
                />
            )}

            <div className="book-info">
                <div className="top info-container">
                    <p className="title">{props.title}</p>
                    <p className="description">{props.description}</p>
                </div>
                <div className="bottom info-container">
                    <p className="author">By {props.author}</p>
                    <p className="year">Published in {props.year}</p>
                    <span onClick={handleDelete}>
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M17 6V5C17 3.89543 16.1046 3 15 3H9C7.89543 3 7 3.89543 7 5V6H4C3.44772 6 3 6.44772 3 7C3 7.55228 3.44772 8 4 8H5V19C5 20.6569 6.34315 22 8 22H16C17.6569 22 19 20.6569 19 19V8H20C20.5523 8 21 7.55228 21 7C21 6.44772 20.5523 6 20 6H17ZM15 5H9V6H15V5ZM17 8H7V19C7 19.5523 7.44772 20 8 20H16C16.5523 20 17 19.5523 17 19V8Z"
                                fill="currentColor"
                            />
                        </svg>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default BookCard;
