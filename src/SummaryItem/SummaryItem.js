import React, { Component } from "react";
import "./SummaryItem.css";

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "USD",
});

class SummaryItem extends Component {
	static defaultProps = {
		selectedOption: {},
	};

	render() {
		const selectedOption = this.props.selectedOption;
		return (
			<div className="summary__option" key={this.props.featureHash}>
				<div className="summary__option__label">{this.props.feature} </div>
				<div className="summary__option__value">{selectedOption.name}</div>
				<div className="summary__option__cost">
					{USCurrencyFormat.format(selectedOption.cost)}
				</div>
			</div>
		);
	}
}

export default SummaryItem;
