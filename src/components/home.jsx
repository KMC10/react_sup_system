import React from "react";
import "../styles/home.css"

function Home(){
    return(
        <div>
            {/*Top section of the home page*/}
            <div className="head-section">
                <p>Personal Information</p>
                <p>Attendance Records</p>
                <p>Logout</p>
            </div>
            {/*Main part of the page */}
            <main>
                <div className="cards">
                    <div className="card early-card">
                        <div className="card-header">
                            <h3>Early</h3>
                        </div>
                        <div class="card-body">
                            <p>33%</p>
                            <p>12 days</p>
                        <button class="card-button">View More</button>
                        </div>
                    </div>

                    <div className="card late-card">
                        <div className="card-header">
                            <h3>Late</h3>
                        </div>
                        <div class="card-body">
                        <p>4%</p>
                        <p>1 days</p>
                        <button class="card-button">View More</button>
                        </div>
                    </div>

                    <div className="card absent-card">
                        <div className="card-header">
                            <h3>Absent</h3>
                            </div> 
                        <div class="card-body">
                        <p>0%</p>
                        <p>0 days</p>
                        <button class="card-button">View More</button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Home;