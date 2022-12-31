// SearchBar - uses the book api to query for the most likely search result.

import { useState } from "react";

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState("");

    function handleChange(event) {
        const value = event.target;
        setSearchInput((prevSearchInput) => ({
            ...prevSearchInput,
            value,
        }));
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        alert("You clicked me!");
    };

    return (
        <div className="search-zone">
            <form className="search-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Search for..."
                    name="search"
                    onChange={handleChange}
                    value={searchInput}
                />

                <button className="search-button">Search</button>
            </form>
        </div>
    );
};

export default SearchBar;
