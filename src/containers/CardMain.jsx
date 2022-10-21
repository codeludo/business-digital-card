import React from "react";
import CardInterest from "../components/CardInterest";
import CardAbout from "../components/CardAbout"
import "../styles/cardMain.css"

const CardMain = () => {

    return (
        <div className="card-main">
            <CardAbout />
            <CardInterest />
        </div>
    )
}

export default CardMain