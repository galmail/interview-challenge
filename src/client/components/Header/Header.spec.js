import React from "react";
import "../../setupTests";
import { shallow } from "enzyme";
import Header from "./Header";

describe("Header", () => {
  let wrapper;

  const itemsSelected = [
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

  // beforeEach(() => {

  // });

  it("renders total items selected", () => {
    wrapper = shallow(<Header itemsSelected={itemsSelected} />);
    const leftSummary = wrapper.find("div.menu-summary-left");
    expect(leftSummary.text()).toContain(/2 items/);
  });

  // it("renders loading message if items have not been loaded", () => {});
});
