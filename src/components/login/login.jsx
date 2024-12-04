import React from "react";
import '../../styles/login_styles/login.css'
function Login() {
    return (
        <>
        <div className = "form-container"> 
        <form className="form">
                <h1>Sign In</h1>
                {/* Username field */}
                <div>
                    <input className = "input-group" placeholder="Please Enter your username or email"></input>
                </div>
                {/* Password field */}
                <div>
                    <input className = "input-group" placeholder="Please Enter your password"></input>
                </div>
                {/* Password recovery */}
                <div>
                    <p>Forgot your password? <a>Click here</a></p>
                </div>
                {/* Login button */}
                <div>
                    <button className = "button">
                        Login
                    </button>
                </div>
            </form>
        </div>
            
        </>
    );
}

export default Login;
