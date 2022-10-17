import { create } from "react-test-renderer";
import React from "react";

import App from "./App";

describe("<App />", () => {
  it("renderizar correctamente", () => {
    const component = create(<App />);
    expect(component).toBeDefined();
  });
});
