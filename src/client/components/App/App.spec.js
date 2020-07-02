import React from "react";
import "../../setupTests";
import { shallow, mount } from "enzyme";
import App from "./App";

describe("App", () => {
  let wrapper;

  it("renders header, sidebar and menu", () => {
    wrapper = shallow(<App />);
    const header = wrapper.find("Header");
    const sidebar = wrapper.find("Sidebar");
    const menu = wrapper.find("Menu");
    expect(header.exists()).toBeTruthy();
    expect(sidebar.exists()).toBeTruthy();
    expect(menu.exists()).toBeTruthy();
  });

  it("toggles the selected items from sidebar", () => {
    // NOT IMPLEMENTED YET
  });

  it("updates the selected items on the menu", () => {
    // NOT IMPLEMENTED YET
  });

  it("updates the selected items on the header", () => {
    // NOT IMPLEMENTED YET
  });
});
