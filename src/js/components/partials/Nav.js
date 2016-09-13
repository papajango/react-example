import React from "react";
import {IndexLink, Link} from "react-router";

export default class Nav extends React.Component {
	constructor() {
		super();
	}
	render() {
		const {location} = this.props;
		const featuredClass = location.pathname === "/" ? "active" : "";
		const archivesClass = location.pathname.match(/^\/archives/) ? "active" : "";	
		return (
			<nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
				<ul class="nav navbar-nav">
					<li class={featuredClass}>
						<IndexLink to="/">Featured</IndexLink>
					</li>
					<li class={archivesClass}>
						<Link to="archives">Archives</Link>
					</li>
				</ul>
			</nav>
		);
	}
}