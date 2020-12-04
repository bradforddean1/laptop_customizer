import React, { Component } from "react";
import "./CustomizationList.css";
import CustomizationFeature from "../CustomizationFeature/CustomizationFeature";
import FEATURES from "../features";

class CustomizationList extends Component {
	static defaultProps = {
		features: {},
	};

	render() {
		const features = Object.keys(FEATURES).map((feature, idx) => {
			const featureHash = feature + "-" + idx;
			const options = FEATURES[feature];
			const selected = this.props.selected[feature];

			return (
				<CustomizationFeature
					key={featureHash}
					featureHash={featureHash}
					feature={feature}
					options={options}
					selected={selected}
					updateFeature={this.props.updateFeature}
				/>
			);
		});

		return (
			<form className="CustomizationList">
				<h2>Customize your laptop</h2>
				{features}
			</form>
		);
	}
}

export default CustomizationList;
