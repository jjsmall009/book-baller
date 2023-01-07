// Hook to create a new Book database entry and update the current User's book list
import React from "react";

export const useAddBook = () => {
    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(null);

    async function getDescription(work_id) {
        const query = `https://openlibrary.org${work_id}.json`;
        const res = await fetch(query);
        let json = await res.json();

        return json.description != undefined ? json.description.value : "No description";
    }

    // Helper function to add a Book to the db if not already there
    const addBookToDB = async (user, bookData) => {
        const title = bookData.title;
        const author = bookData.author_name
            ? bookData.author_name[0]
            : "no author";
        const year = bookData.first_publish_name
            ? bookData.first_publish_name
            : "n/a";
        const description = await getDescription(bookData.key);
        const cover_i = bookData.cover_i ? bookData.cover_i : "n/a";

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

        return json._id;
    };

    // Helper function to update the users book list with the new book
    const updateUserBookList = async (user, book_id) => {
        const username = user.username;
        let response = null;

        try {
            response = await fetch("api/user/update", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, book_id }),
            });
        } catch (e) {
            console.log(e);
        }

        let json = await response.json();

        if (!response.ok) {
            setLoading(false);
            setError(json.error);
        }

        setLoading(false);
        console.log("book added to users books list");
    };

    // Hook used to add the selected book (from the search results) to
    // the database and all that jazz
    const addBook = async (user, bookData) => {
        setLoading(true);
        setError(null);

        const id = await addBookToDB(user, bookData);

        if (id) {
            console.log(id);
            updateUserBookList(user, id);
        }
    };

    return { addBook, error, loading };
};