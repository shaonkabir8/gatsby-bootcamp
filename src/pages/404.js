import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"

const notFound = props => {
	return (
		<Layout>
			<div className="error">
				<h3>No Page Found as <mark>{window.location.pathname}</mark> !!</h3>
				<Link to="/">Back to Home</Link>
			</div>
		</Layout>
	)
}

export default notFound;
