import React from "react"
import CardFooter from "../containers/CardFooter"
import CardHeader from "../containers/CardHeader"
import CardMain from "../containers/CardMain"
import "../styles/card1.css"

const Card1 = () => {
	return (
		<div className="card-container">
			<div className="card">
				<CardHeader />
				<CardMain />
				<CardFooter />
			</div>
		</div>
	)
}

export default Card1
