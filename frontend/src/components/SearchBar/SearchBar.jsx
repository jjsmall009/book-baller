// SearchBar - uses the book api to query for the most likely search result.

import { useState, useEffect, useRef } from "react";
import { useAddBook } from "../../hooks/useAddBook";
import SearchResult from "./SearchResult";

const SearchBar = ({ user, callback }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [searchDone, setSearchDone] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const wrapperRef = useRef(null);
    const { addBook, error, loading } = useAddBook();

    // These next two functions will remove the search results from view when the user
    // clicks outside of the search results zone
    useEffect(() => {
        document.addEventListener("click", handleClickOutside, false);
        return () => {
            document.removeEventListener("click", handleClickOutside, false);
        };
    }, []);

    const handleClickOutside = (event) => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
            setIsVisible(false);
            setSearchResults([]);
        }
    };

    // Function to add a book and do the stuff
    const addBookToLibrary = async (book) => {
        const newBook = await addBook(user, book);

        if (newBook) {
            console.log("passing book back to homepage");
            callback(newBook);
        }

        // Remove the search results once a book is added
        setSearchDone(!searchDone);
        setSearchTerm("");
    };

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // When clicked, query based on the search parameter and get the top 5 results
    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsVisible(true);
        setSearchDone(false);

        async function getSearchBooks() {
            const query = `https://openlibrary.org/search.json?q=${searchTerm}&limit=5`;
            const res = await fetch(query);
            const data = await res.json();

            setSearchResults(data.docs);
            console.log("search results found and added to state");
        }
        getSearchBooks();
    };

    return (
        <div className="search-zone" ref={wrapperRef}>
            <form className="search-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Search for..."
                    name="search"
                    onChange={handleChange}
                    value={searchTerm}
                />

                <button className="search-button" disabled={loading}>Search</button>
            </form>

            {isVisible && (
                <div className="search-results">
                    {!searchDone &&
                        searchResults.map((book) => (
                            <SearchResult props={book} key={book.key} onPress={addBookToLibrary} />
                        ))}
                </div>
            )}

            {error && <div className="error">{error}</div>}
        </div>
    );
};

export default SearchBar;
