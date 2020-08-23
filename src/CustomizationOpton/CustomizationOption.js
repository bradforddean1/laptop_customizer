import React, { Component } from "react";
import "./CustomizationOption.css";

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from "slugify";

const USCurrencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

class CustomizationOption extends Component {
  static defaultProps = {
    feature: "na",
    item: {
      name: "None",
      cost: 0,
    },
    selected: {},
  };

  render() {
    const item = this.props.item;
    const feature = this.props.feature;
    return (
      <div key={this.props.itemHash} className="feature__item">
        <input
          type="radio"
          id={this.props.itemHash}
          className="feature__option"
          name={slugify(feature)}
          checked={item.name === this.props.selected.name}
          onChange={(e) => this.props.updateFeature(feature, item)}
        />
        <label htmlFor={this.props.itemHash} className="feature__label">
          {item.name} ({USCurrencyFormat.format(item.cost)})
        </label>
      </div>
    );
  }
}

export default CustomizationOption;
