import React from "react"
import "../styles/doubleBtn.css"
import mail from "../assets/mail-svgrepo-com.svg"
import linkedin from "../assets/linkedin-svgrepo-com.svg"
const DoubleBtn = () => {
	return (
		<div className="info-btn">
			<button className="btn-email" href="mailto:kolinin@gmail.com">
				<img src={mail} alt="" /> Email
			</button>
			<button className="btn-linkedin" href="https://www.linkedin.com/in/camilo-acevedo-xojixho/">
				<img src={linkedin} alt="" /> Linkedin
			</button>
		</div>
	)
}
export default DoubleBtn
