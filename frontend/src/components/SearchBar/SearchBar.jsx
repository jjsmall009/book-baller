// SearchBar - uses the book api to query for the most likely search result.

import { useState, useEffect } from "react";
import SearchResult from "./SearchResult";

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

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
                {searchResults.map((book) => (
                    <SearchResult {...book} key={book.key} />
                ))}
            </div>
        </div>
    );
};

export default SearchBar;
