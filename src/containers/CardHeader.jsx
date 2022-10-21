import React from "react"
import "../styles/cardHeader.css"
import CardInfo from "../components/CardInfo"

const CardHeader = () => {
	return (
		<div className="card-header">
			<figure>
				<img
					src="https://i.imgur.com/AWn7Q3i.jpg"
					alt=""
					className="img-info"
				/>
			</figure>
            <CardInfo />
		</div>
	)
}

export default CardHeader
