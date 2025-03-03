import React from "react";
import { IoMdMenu } from "react-icons/io";
import "../../styles/login_styles/check.css"; 

function Check() {
    return (
        <div className="check-container">
            {/* Header */}
            <header className="check-header">
                <h1>Check-In & Check-Out</h1>
                <button className="menu-button" aria-label="Open menu">
                    <IoMdMenu />
                </button>
            </header>

            {/* Main Content */}
            <main className="check-main">
                <p>Welcome! Please choose an option below:</p>
                <div className="button-group">
                    <button className="checkin-button">Check-In</button>
                    <button className="checkout-button">Check-Out</button>
                </div>
            </main>

            {/* Footer */}
            <footer className="check-footer">
                <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Check;
