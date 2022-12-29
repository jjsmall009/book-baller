// Signup page
import React from "react";
import { useSignup } from "../hooks/useSignup";

function Signup() {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const { signup, loading, error } = useSignup();

    const handleSubmit = async (e) => {
        e.preventDefault();

        await signup(username, password);
    };

    return (
        <main className="container page">
            <form className="signup" onSubmit={handleSubmit}>
                <h3>Signup Form</h3>

                <label>Username:</label>
                <input
                    type="username"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                />

                <label>Password:</label>
                <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />

                <button disabled={loading}>Sign up</button>
                {error && <div className="error">{error}</div>}
            </form>
        </main>
    );
}

export default Signup;
