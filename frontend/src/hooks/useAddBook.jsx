// Hook to create a new Book database entry and update the current User's book list
import React from "react";

export const useAddBook = () => {
    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(null);

    const addBook = async (user, bookData) => {
        setLoading(true);
        setError(null);

        console.log(
            `about to add book to db and do stuff for ${user.username}`
        );
        
        // Create a Book and add to the db

        // Update current User with the new book
    };

    return { addBook };
};
