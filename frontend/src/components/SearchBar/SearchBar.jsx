// SearchBar - uses the book api to query for the most likely search result.

import { useState, useEffect } from "react";
import { useAddBook } from "../../hooks/useAddBook";
import SearchResult from "./SearchResult";

const SearchBar = ({ user }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [searchDone, setSearchDone] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { addBook, error, loading } = useAddBook();

    // Function to add a book and do the stuff
    const addBookToLibrary = async (book) => {
        await addBook(user, book);

        // Remove the search results once a book is added
        setSearchDone(!searchDone);
    };

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setSearchDone(false);
        setIsLoading(true);

        async function getSearchBooks() {
            const query = `https://openlibrary.org/search.json?q=${searchTerm}&limit=5`;
            const res = await fetch(query);
            const data = await res.json();

            setSearchResults(data.docs);
            console.log("search results found and added to state");
        }
        getSearchBooks();
        setIsLoading(false);
    };

    return (
        <div className="search-zone">
            <form className="search-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Search for..."
                    name="search"
                    onChange={handleChange}
                    value={searchTerm}
                />

                <button className="search-button">Search</button>
            </form>

            <div className="search-results">
                {!searchDone && searchResults.map((book) => (
                    <SearchResult
                        props={book}
                        key={book.key}
                        onPress={addBookToLibrary}
                    />
                ))}
            </div>
            {isLoading && <p>Searching...</p>}
            {error && <div className="error">{error}</div>}
        </div>
    );
};

export default SearchBar;
