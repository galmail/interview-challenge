import React from "react";
import "../../setupTests";
import { shallow } from "enzyme";
import Sidebar from "./Sidebar";

describe("Sidebar", () => {
  let wrapper;

  const menuItems = [
    {
      id: 1001,
      name: "Kale Caesar Pasta, Turmeric Satay Broccoli & Lemon Cashew Greens",
      dietaries: ["v", "ve", "df", "gf", "n!"]
    },
    {
      id: 1002,
      name: "Hake & Smoky Chickpeas, Brown Rice & Quinoa, Roasted Roots",
      dietaries: ["gf", "df", "rsf"]
    }
  ];

  beforeEach(() => {
    fetch.resetMocks();
  });

  it("renders the menu items", () => {
    fetch.mockResponseOnce(JSON.stringify({ items: menuItems }));
    wrapper = shallow(<Sidebar />);
    const items = wrapper.find("li");
    expect(items.length).toEqual(2);
    expect(wrapper.text()).toContain(/Kale Caesar Pasta/);
  });

  it("renders loading message if items have not been loaded", () => {});
});
