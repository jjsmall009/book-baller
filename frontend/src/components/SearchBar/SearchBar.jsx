// SearchBar - uses the book api to query for the most likely search result.

import { useState, useEffect } from "react";

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        async function getSearchBooks() {
            const res = await fetch(
                "https://openlibrary.org/search.json?q=the+lord+of+the+rings&limit=5"
            );
            const data = await res.json();
            setSearchResults(data.docs);
            console.log("search results found and added to state");
        }
        getSearchBooks();
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
            <div className="search-">
                <p>Search results go below...</p>
                {searchResults.map((book) => (
                    <p>{book.title}</p>
                ))}
            </div>
        </div>
    );
};

export default SearchBar;
