// SearchBar - uses the book api to query for the most likely search result.

import { useState } from "react";

const SearchBar = () => {
    const [formData, setFormData] = useState({
        search: "",
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData((prevSearch) => ({
            ...prevSearch,
            [name]: value,
        }));
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        alert(`${formData.search}`);
    };

    return (
        <div className="search-zone">
            <form className="search-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Search for..."
                    name="search"
                    onChange={handleChange}
                    value={formData.search}
                />

                <button className="search-button">Search</button>
            </form>
        </div>
    );
};

export default SearchBar;
