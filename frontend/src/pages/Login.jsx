// Login page
import React from "react";
import { Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

function Login() {
    const { login, loading, error } = useLogin();
    const [formData, setFormData] = React.useState({
        username: "",
        password: "",
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        await login(formData.username, formData.password);
    };

    return (
        <main className="container page login-page">
            <h2>Log in</h2>
            <form className="form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    name="username"
                    onChange={handleChange}
                    value={formData.username}
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={handleChange}
                    value={formData.password}
                />

                <p>
                    Need to register? <Link to="/signup">Sign up</Link>
                </p>

                <button disabled={loading} className="form--submit">
                    Log in
                </button>
                {error && <div className="error">{error}</div>}
            </form>
        </main>
    );
}

export default Login;
