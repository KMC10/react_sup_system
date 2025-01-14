import React, { useState } from "react";
import "../../styles/login_styles/login.css";
import Check from "../checking_comps/check"; // Import the Check component

function Login() {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // State to toggle between components

    const handleLoginClick = () => {
        setIsLoggedIn(true); // Set state to true when the login button is clicked
    };

    return (
        <>
            {isLoggedIn ? ( // Conditional rendering
                <Check />
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
                                type="button" // Prevent form submission for now
                                onClick={handleLoginClick} // Handle button click
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
