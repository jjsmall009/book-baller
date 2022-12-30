// Signup page
import React from "react";
import { Link } from "react-router-dom"
import { useSignup } from "../hooks/useSignup";

function Signup() {
    const { signup, loading, error } = useSignup();
    const [formData, setFormData] = React.useState({
        username: "",
        password: "",
        passwordConfirm: "",
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
        if (formData.password === formData.passwordConfirm) {
            await signup(formData.username, formData.password);
        } else {
            console.log("passwords don't match");
            return;
        }
    };

    return (
        <main className="container page signup-page">
                <h2>Sign Up</h2>
                <form className="form" onSubmit={handleSubmit}>
                    <input
                        type="username"
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
                    <input
                        type="password"
                        placeholder="Confirm password"
                        name="passwordConfirm"
                        onChange={handleChange}
                        value={formData.passwordConfirm}
                    />

                    <p>Already a member? <Link to="/login">Log in</Link></p>

                    <button disabled={loading} className="form--submit">
                        Sign up
                    </button>
                    {error && <div className="error">{error}</div>}
                </form>

        </main>
    );
}

export default Signup;
