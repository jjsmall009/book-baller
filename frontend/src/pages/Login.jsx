// Login page
import React from "react";
import { useLogin } from "../hooks/useLogin";

function Login() {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const { login, loading, error } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();

        await login(username, password);
    };

    return (
        <main className="container page">
            <form className="login" onSubmit={handleSubmit}>
                <h3>Login</h3>

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

                <button disabled={loading}>Login</button>
                {error && <div className="error">{error}</div>}
            </form>
        </main>
    );
}

export default Login;
