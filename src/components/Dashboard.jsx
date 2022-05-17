import React, { useState } from "react";
import UserCard from "./UserCard";
import DashCard from "./DashCard";
import data from "../data/data.json";

export default function Dashboard() {
    const [timeframe, setTimeframe] = useState("weekly");

    function changeTimeframe(timeframeUpdate) {
        setTimeframe(timeframeUpdate);
    }

    function createDashCard(cardData) {
        return <DashCard timeframe={timeframe} title={cardData.title} timeframeData={cardData.timeframes} />;
    }
    return (
        <div className="dashboard">
            <UserCard changeTimeframe={changeTimeframe} />
            <div className="dashboard-cards">{data.map(createDashCard)}</div>
        </div>
    );
}
