import React from "react";
import './Homepage.css'

const HomePage = () => {
    return(
        <div className = "homepage">
            <div className="outerDiv">
                <div className="outerNav">
                    <div className="left-side">
                        <div><a href="http://localhost:3000/lux/home"> Home </a></div>
                        <div><a href="http://localhost:3000/lux/building"> Building </a></div>
                        <div><a href="http://localhost:3000/lux/location"> Location </a></div>
                    </div>
                </div>
                <div className="right-side">
                    <div className="mainContainer">
                        <div className="wrapper">
                            <p>LUX : Search for home</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;