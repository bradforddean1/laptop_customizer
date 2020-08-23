import React, { Component } from "react";
import "./Summary.css";
import SummaryItem from "../SummaryItem/SummaryItem";
import TotalItems from "../TotalItems/TotalItems";

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

class Summary extends Component {
  static defaultProps = {
    selected: {},
  };

  render() {
    const selected = this.props.selected;
    const summary = Object.keys(selected).map((feature, idx) => {
      const featureHash = feature + "-" + idx;
      const selectedOption = selected[feature];

      return (
        <SummaryItem
          key={featureHash}
          featureHash={featureHash}
          feature={feature}
          selectedOption={selectedOption}
        />
      );
    });

    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        {summary}
        <TotalItems selected={selected} />
      </section>
    );
  }
}

export default Summary;
