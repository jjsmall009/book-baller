// User landing page once logged in
import { useState } from "react";
import { useEffect } from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import { useAuthContext } from "../hooks/useAuthContext";

const UserHomepage = () => {
    const { user } = useAuthContext();
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchUsersBooks = async () => {
            const response = await fetch("/api/books", {
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

    return (
        <main className="container page">
            <h1>{user.username}'s Books</h1>
            <h3>{books.length} books in collection</h3>

            <SearchBar />

            {books.map((book) => (
                <div>{book.title}</div>
            ))}
        </main>
    );
};

export default UserHomepage;
