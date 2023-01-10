import React from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(null);
    const { dispatch } = useAuthContext();

    const signup = async (username, password, passwordConfirm) => {
        if (password !== passwordConfirm) {
            setLoading(false);
            setError("passwords must match");
            return;
        } else {
            setLoading(true);
            setError(null);
        }

        let response = null;

        try {
            response = await fetch("/api/user/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });
        } catch (e) {
            setError(e);
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
