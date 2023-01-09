// User landing page once logged in
import { useState } from "react";
import { useEffect } from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import { useAuthContext } from "../hooks/useAuthContext";
import BookCard from "../components/BookCard/BookCard";

const UserHomepage = () => {
    const { user } = useAuthContext();
    const [books, setBooks] = useState([]);

    // When the page is loaded, send a request to get all book data
    // for the given user
    useEffect(() => {
        const fetchUsersBooks = async () => {
            const response = await fetch("/api/user/get_books", {
                headers: { Authorization: `Bearer ${user.token}` },
            });

            if (response.ok) {
                console.log("User successfully found - adding books to page");
            }

            const json = await response.json();
            setBooks(json);
        };

        if (user) {
            fetchUsersBooks();
        }
    }, [user]);

    const callback = (newBook) => {
        setBooks([newBook, ...books]);
        console.log("Homepage updated with new book");
    };

    const beenDeleted = (id) => {
        setBooks((prevData) => {
            return prevData.filter((b) => b._id !== id);
        });
        console.log("Book has been deleted. Homepage updated.");
    };

    return (
        <main className="container page">
            <h1>{user.username}'s Books</h1>
            <h3>{books.length} books in collection</h3>

            <SearchBar user={user} callback={callback}/>

            <div className="card-zone">
                {books.map((book) => (
                    <BookCard key={book._id} props={book} callback={beenDeleted} />
                ))}
            </div>
        </main>
    );
};

export default UserHomepage;
