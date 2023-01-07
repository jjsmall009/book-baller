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
        const cover_i = bookData.cover_i ? bookData.cover_i : "n/a";

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
                    cover_i,
                }),
            });
        } catch (e) {
            console.log("error in useAddBook");
            console.log(e);
        }

        let json = await response.json();

        if (!response.ok) {
            setLoading(false);
            setError(json.error);
        }

        if (response.ok) {
            const username = user.username;
            const book_id = json._id;
            try {
                response = await fetch("api/user/update", {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ username, book_id }),
                });
            } catch (e) {
                console.log("error in adding book to users book list");
                console.log(e);
            }

            json = await response.json();

            if (!response.ok) {
                setLoading(false);
                setError(json.error);
            }

            setLoading(false);
            console.log("book added to users books list");
        }

        // Update current User with the new book
    };

    return { addBook, error, loading };
};
