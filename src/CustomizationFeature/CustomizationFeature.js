import React, { Component } from "react";
import "./CustomizationFeature.css";
import CustomizationOption from "../CustomizationOpton/CustomizationOption";
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from "slugify";

class CustomizationFeature extends Component {
	static defaultProps = {
		options: [],
	};

	render() {
		const options = this.props.options.map((item) => {
			const itemHash = slugify(JSON.stringify(item));
			return (
				<CustomizationOption
					key={itemHash}
					itemHash={itemHash}
					item={item}
					feature={this.props.feature}
					selected={this.props.selected}
					updateFeature={this.props.updateFeature}
				/>
			);
		});

		return (
			<div className="CustomizationFeature">
				<fieldset className="feature" key={this.props.featureHash}>
					<legend className="feature__name">
						<h3>{this.props.feature}</h3>
					</legend>
					{[options]}
				</fieldset>
			</div>
		);
	}
}

export default CustomizationFeature;
