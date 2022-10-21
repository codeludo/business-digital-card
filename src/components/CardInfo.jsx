import React from "react";
import "../styles/cardInfo.css"
import DoubleBtn from "./DoubleBtn";


const CardInfo = () => {
    return (
        <div className="card-info">
            <h1 className="name">Juan Camilo</h1>
            <p className="role">FrontEnd Developer</p>
            <p className="website">my-portafolio.website</p>
            <DoubleBtn />
        </div>
    )
}

export default CardInfo