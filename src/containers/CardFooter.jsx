import React from "react";
import "../styles/cardFooter.css"
import twitter from "../assets/twitter-svgrepo-com.svg"
import facebook from "../assets/facebook-svgrepo-com.svg"
import instagram from "../assets/instagram-svgrepo-com.svg"
import github from "../assets/github-svgrepo-com.svg"


const CardFooter = () => {

    return (
        <div className="card-footer">
            <a href="https://twitter.com/codeludo">
                <img src={twitter} alt="twitter" />
            </a>
            <a href="https://facebook.com/codeludo">
                <img src={facebook} alt="facebook" />
            </a>
            <a href="https://instagram.com/codeludo">
                <img src={instagram} alt="instagram" />
            </a>
            <a href="https://github.com/codeludo">
                <img src={github} alt="github" />
            </a>
        </div>
    )
}

export default CardFooter