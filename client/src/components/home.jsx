import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";
import { useNavigate } from "react-router-dom";

function Logout() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token"); // If using authentication
        navigate(0); // Force reload
    };

    return <button onClick={handleLogout}>Logout</button>;
}


function Home() {
    return (
        <div className="home-container">
            {/* Top Section */}
            <header className="head-section">
                <p>Personal Information</p>
                <p><Link to="/attendance" className="attendance-link">Attendance Records</Link></p>
                <Logout/>
            </header>

            {/* Main Content */}
            <main className="home-main">
                <div className="cards">
                    <div className="card early-card">
                        <div className="card-header">
                            <h3>Early</h3>
                        </div>
                        <div className="card-body">
                            <p className="percentage">33%</p>
                            <p className="days">12 days</p>
                            <button className="card-button">View More</button>
                        </div>
                    </div>

                    <div className="card late-card">
                        <div className="card-header">
                            <h3>Late</h3>
                        </div>
                        <div className="card-body">
                            <p className="percentage">4%</p>
                            <p className="days">1 day</p>
                            <button className="card-button">View More</button>
                        </div>
                    </div>

                    <div className="card absent-card">
                        <div className="card-header">
                            <h3>Absent</h3>
                        </div>
                        <div className="card-body">
                            <p className="percentage">0%</p>
                            <p className="days">0 days</p>
                            <button className="card-button">View More</button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Home;
