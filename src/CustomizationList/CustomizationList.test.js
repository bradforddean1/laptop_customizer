import React from "react";
import ReactDOM from "react-dom";
import CustomizationList from "./CustomizationList";

describe("CustomizationList Component", () => {
  // Smoke test
  test("Renders", () => {
    const div = document.createElement("div");
    ReactDOM.render(<CustomizationList />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
