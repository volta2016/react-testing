import { create } from "react-test-renderer";
import React from "react";

import App from "./App";

describe("<App />", () => {
  it("renderizar correctamente", () => {
    const component = create(<App />);
    expect(component).toBeDefined();
    // console.log(component.toJSON);
  });

  it("Render header correct", () => {
    const component = create(<App />);
    const header = component.root.findByType("header");
    expect(header).toBeDefined();
    expect(header.props.className).toEqual("App-header");
  });

  it("Render a text, link and image", () => {
    const component = create(<App />);
    const header = component.root.findByType("header");

    const img = header.findByType("img");
    const a = header.findByType("a");
    const p = header.findByType("p");

    expect(img).toBeDefined();
    expect(img.props.className).toEqual("App-logo");
    expect(img.props.src).toEqual("logo.svg");

    expect(a.props.href).toBe("https://reactjs.org");

    expect(p).toBeDefined;
    expect(p.findByType("code")).toBeDefined();
    // console.log(p.props);
  });
});
