import React, { Component } from "react";
import "./TotalItems.css";

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "USD",
});

class TotalItems extends Component {
	static defaultProps = {
		selected: {},
	};

	render() {
		const selected = this.props.selected;
		const total = Object.keys(selected).reduce(
			(acc, curr) => acc + selected[curr].cost,
			0
		);

		return (
			<div className="summary__total">
				<div className="summary__total__label">Total</div>
				<div className="summary__total__value">
					{USCurrencyFormat.format(total)}
				</div>
			</div>
		);
	}
}

export default TotalItems;
