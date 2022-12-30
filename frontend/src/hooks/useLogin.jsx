import React from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(null);
    const { dispatch } = useAuthContext();

    const login = async (username, password) => {
        setLoading(true);
        setError(null);

        console.log("userSignup - about to fetch to backend api...");
        let response = null;

        try {
            response = await fetch("api/user/login", {
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
            console.log("login done");
        }
    };

    return { login, loading, error };
};
