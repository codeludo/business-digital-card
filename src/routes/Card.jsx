import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Layout from "../containers/Layout"
import Container from "../containers/Container"
import Card1 from "../pages/Card1"
import Card2 from "../pages/Card2"


const Card = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Container>
					<Switch>
						<Route exact path="/" component={Card1} />
						<Route exact path="/card-2" component={Card2} />
					</Switch>
				</Container>
			</Layout>
		</BrowserRouter>
	)
}

export default Card
