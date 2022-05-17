import React from "react";

export default function DashCard(props) {
    function current() {
        switch (props.timeframe) {
            case "daily":
                return props.timeframeData.daily.current;

            case "monthly":
                return props.timeframeData.monthly.current;

            default:
                return props.timeframeData.weekly.current;
        }
    }

    function previous() {
        switch (props.timeframe) {
            case "daily":
                return "Yesterday - " + props.timeframeData.daily.previous;

            case "monthly":
                return "Last Month - " + props.timeframeData.monthly.previous;

            default:
                return "Last Week - " + props.timeframeData.weekly.previous;
        }
    }

    return (
        <div className={"dash-card " + props.title.replace(/\s+/g, "-").toLowerCase()}>
            <div className="dash-card-wrapper">
                <div className="dash-card-title">
                    <p>{props.title}</p>
                    <button className="settings">
                        <img src="./images/icon-ellipsis.svg" alt="ellipsis" />
                    </button>
                </div>
                <h1>{current()}hrs</h1>
                <p>{previous()}hrs</p>
            </div>
        </div>
    );
}

// {
//     props.timeframeData.weekly.current + props.timeframe;
// }
