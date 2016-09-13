import React from "react";
import Article from "./partials/Article";

export default class Featured extends React.Component {
	render() {
		const Articles = [
			"Some Article",
			"Some Other Article",
			"Another one"
		].map((title, i) => <Article key={i} title={title} />);	

		const adText = [
			"Ad spot #1",
			"Ad spot #2",
			"Ad spot #3"
		];

		const randomAd = adText[Math.round( Math.random() * (adText.length-1) )];
		
		return (
			<div>
				<div class="row">
					<div class="col-xs-12">
						<div class="well text-center">
							{randomAd}
						</div>
					</div>
				</div>
				<div class="row">
					{Articles}
				</div>
			</div>
		);
	}
}