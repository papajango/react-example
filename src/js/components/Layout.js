import React from "react";
import Nav from "./partials/Nav";
import Footer from "./partials/Footer";

export default class Layout extends React.Component {
	render() {
		const {location} = this.props;
		const containerStyle = {
			marginTop: "60px"
		};

		return (
			<div>
				<Nav location={location} />

				<div class="container" style={containerStyle}>
					<div class="row">
						<div class="col-xs-12">
							<h1>News list</h1>
							{this.props.children}
						</div>
					</div>
					<Footer />
				</div>
			</div>
		);
	}
}