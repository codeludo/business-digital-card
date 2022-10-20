import React from "react"
import { Link } from "react-router-dom"
import userLogo from "../assets/user-svgrepo-com.svg"
import ToggleDarkMode from "./ToggleDarkMode"
import "../styles/header.css"
import sun from "../assets/sun-svgrepo-com.svg"
import moon from "../assets/full-moon-svgrepo-com.svg"

export default function Header() {
	return (
		<>
			<nav className="nav-header">
				<div className="nav-left">
					<img src={userLogo} className="logo" alt="" />
					<h1 className="title">Business card</h1>
						<ul>
							<li>
								<Link to="/">Card-1</Link>
							</li>
							<li>
								<Link to="/card-2">Card-2</Link>
							</li>
						</ul>
					</div>
				<div className="nav-right">
					<div>
						<img src={sun} alt="light mode" className="sun-img" />
					</div>
					<div>
						<ToggleDarkMode />
					</div>
					<div>
						<img src={moon} alt="dark mode" className="moon-img" />
					</div>
				</div>
			</nav>
		</>
	)
}

