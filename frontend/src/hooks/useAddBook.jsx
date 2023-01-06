// Hook to create a new Book database entry and update the current User's book list
import React from "react";

export const useAddBook = () => {
    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(null);

    const addBook = async (user, bookData) => {
        const title = bookData.title;
        const author = bookData.author_name
            ? bookData.author_name[0]
            : "no author";
        const year = bookData.first_publish_name
            ? bookData.first_publish_name
            : "n/a";
        const description = "add description later...";
        const cover = "cover_i";

        setLoading(true);
        setError(null);
        let response = null;

        console.log(
            `about to add book to db and do stuff for ${user.username}`
        );

        // Create a Book and add to the db
        try {
            response = await fetch("api/books/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${user.token}`,
                },
                body: JSON.stringify({
                    title,
                    author,
                    year,
                    description,
                    cover,
                }),
            });
        } catch (e) {
            console.log("error in useAddbook");
            console.log(e);
        }

        const json = await response.json();

        if (!response.ok) {
            setLoading(false);
            setError(json.error);
        }

        if (response.ok) {
            setLoading(false);
            console.log("book added. yay!");
        }

        // Update current User with the new book
    };

    return { addBook, error, loading };
};
