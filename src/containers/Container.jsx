import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Option1 from "./Option1"
import Option2 from "./Option2"

import "../styles/container.css"

const Container = () => {
	return (
		<>
			<div className="card-container">
				<BrowserRouter>
					<Switch>
						<Route exact path="/" component={Option1} />
						<Route exact path="/card-2" component={Option2} />
					</Switch>
				</BrowserRouter>
			</div>
		</>
	)
}

export default Container
