import React from "react";

export default class extends React.Component {
	render() {	
		const {title} = this.props;
		return (
			<div class="col-md-4">
				<h2>{title}</h2>
				<p>Some text about article</p>
				<a href="#" class="btn btn-default">More info</a>
			</div>
		);
	}
}