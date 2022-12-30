import React from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(null);
    const { dispatch } = useAuthContext();

    const login = async (username, password) => {
        setLoading(true);
        setError(null);

        const response = await fetch("api/user/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

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

    return { login, loading, error };
};
