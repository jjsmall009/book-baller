// User landing page once logged in
import { useEffect } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

const UserHomepage = () => {
    const { user } = useAuthContext();

    useEffect(() => {
        const fetchUsersBooks = async () => {
            const response = await fetch("/api/books", {
                headers: { Authorization: `Bearer ${user.token}` },
            });
            const json = await response.json();

            if (response.ok) {
                console.log("User successfully found - adding books to page")
            }
        };

        if (user) {
            //fetchUsersBooks();
        }
    }, [user]);

    return (
        <main className="container page">
            <p>Hello {user && user.username}</p>
        </main>
    );
};

export default UserHomepage;
