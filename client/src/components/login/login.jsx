import React, { useState } from "react";
import "../../styles/login_styles/login.css";
import Home from "../home"; // Import Home component
import axios from "axios";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [error, setError] = useState("");

    const handleLoginClick = async (e) => {
        e.preventDefault(); // Prevent form refresh

        try {
            const response = await axios.post("http://localhost:5000/api/auth/login", {
                email,
                password,
            });

            localStorage.setItem("token", response.data.token); // Store token
            setIsLoggedIn(true);
        } catch (err) {
            setError(err.response?.data?.error || "Login Failed. Please try again.");
            setIsLoggedIn(false);
        }
    };

    return (
        <>
            {isLoggedIn ? (
                <Home />
            ) : (
                <div className="form-container">
                    <form className="form" onSubmit={handleLoginClick}>
                        <h1>Sign In</h1>

                        {/* Display error message */}
                        {error && <p style={{ color: "red" }}>{error}</p>}

                        {/* Email field */}
                        <div>
                            <input
                                className="input-group"
                                placeholder="Please Enter your username or email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        {/* Password field */}
                        <div>
                            <input
                                className="input-group"
                                placeholder="Please Enter your password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        {/* Password recovery */}
                        <div>
                            <p>
                                Forgot your password? <a href="#">Click here</a>
                            </p>
                        </div>

                        {/* Login button */}
                        <div>
                            <button className="button" type="submit">
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </>
    );
}
export default Login;
