import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Head from "../components/Head"

const notFound = props => {
	return (
		<Layout>
			<Head title="404" />
			<div className="error">
				<h3>
					No Page Found as <mark>{window.location.pathname}</mark> !!
				</h3>
				<Link to="/">Back to Home</Link>
			</div>
		</Layout>
	)
}

export default notFound
