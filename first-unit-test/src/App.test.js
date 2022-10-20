import { create } from "react-test-renderer";
import React from "react";

import App from "./App";

let component;
let header;

describe("<App />", () => {
  beforeAll(() => {
    component = create(<App />);
    header = component.root.findByType("header");
  });

  it("renderizar correctamente", () => {
    const component = create(<App />);
    expect(component).toBeDefined();
    // console.log(component.toJSON);
  });

  it("Render header correct", () => {
    expect(header).toBeDefined();
    expect(header.props.className).toEqual("App-header");
  });

  it("Render a text, link and image", () => {
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
