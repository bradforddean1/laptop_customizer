import React from "react";
import ReactDOM from "react-dom";
import SummaryItem from "./SummaryItem";

describe("SummaryItem Component", () => {
  // Smoke test
  test("Renders", () => {
    const div = document.createElement("div");
    ReactDOM.render(<SummaryItem />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
