import React from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(null);
    const { dispatch } = useAuthContext();

    const signup = async (username, password) => {
        setLoading(true);
        setError(null);

        console.log("userSignup - about to fetch to backend api...");

        try {
            const response = await fetch("http://localhost:4001/api/user/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });
        } catch (e) {
            console.log(e);
        }

        const json = await response.json();

        if (!response.ok) {
            setLoading(false);
            setError(json.error);
        }

        if (response.ok) {
            localStorage.setItem("user", JSON.stringify(json));

            dispatch({ type: "LOGIN", payload: json });
            setLoading(false);
        }
    };

    return { signup, loading, error };
};
