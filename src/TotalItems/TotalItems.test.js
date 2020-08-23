import React from "react";
import ReactDOM from "react-dom";
import TotalItems from "./TotalItems";

describe("TotalItems Component", () => {
  // Smoke test
  test("Renders", () => {
    const div = document.createElement("div");
    ReactDOM.render(<TotalItems />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
