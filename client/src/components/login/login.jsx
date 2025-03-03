import React, { useState } from "react";
import "../../styles/login_styles/login.css";
import Home from "../home"; // Import Home component

function Login() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginClick = () => {
        setIsLoggedIn(true);
    };

    return (
        <>
            {isLoggedIn ? (
                <Home /> // Show Home after login
            ) : (
                <div className="form-container">
                    <form className="form">
                        <h1>Sign In</h1>
                        {/* Username field */}
                        <div>
                            <input
                                className="input-group"
                                placeholder="Please Enter your username or email"
                            />
                        </div>
                        {/* Password field */}
                        <div>
                            <input
                                className="input-group"
                                placeholder="Please Enter your password"
                                type="password"
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
                            <button
                                className="button"
                                type="button"
                                onClick={handleLoginClick} // Show Home on login
                            >
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
