import React from "react";
import ReactDOM from "react-dom";
import CustomizationOption from "./CustomizationOption";

describe("CustomizationOption Component", () => {
  // Smoke test
  test("Renders", () => {
    const div = document.createElement("div");
    ReactDOM.render(<CustomizationOption />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
