import React from "react";

export default function UserCard(props) {
    function handleClick(e) {
        props.changeTimeframe(e.target.className);
    }

    return (
        <div className="user-card">
            <div className="user-profile">
                <div className="user-image">
                    <img src="./images/image-jeremy.png" alt="user" />
                </div>
                <div className="user-name">
                    <p>Report for</p>
                    <h1>Jeremy Robson</h1>
                </div>
            </div>
            <div className="timeframe">
                <button onClick={handleClick} className="daily">
                    Daily
                </button>
                <button onClick={handleClick} className="weekly">
                    Weekly
                </button>
                <button onClick={handleClick} className="monthly">
                    Monthly
                </button>
            </div>
        </div>
    );
}
