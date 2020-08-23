import React from "react";
import ReactDOM from "react-dom";
import CustomizationFeature from "./CustomizationFeature";

describe("CustomizationFeature Component", () => {
  // Smoke test
  test("Renders", () => {
    const div = document.createElement("div");
    ReactDOM.render(<CustomizationFeature />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
