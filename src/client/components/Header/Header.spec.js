import React from "react";
import "../../setupTests";
import { shallow, mount } from "enzyme";
import Header from "./Header";

describe("Header", () => {
  let wrapper;
  let itemsSelected;

  beforeEach(() => {
    itemsSelected = [
      {
        id: 1001,
        name:
          "Kale Caesar Pasta, Turmeric Satay Broccoli & Lemon Cashew Greens",
        dietaries: ["v", "ve", "df", "gf", "n!"]
      },
      {
        id: 1002,
        name: "Hake & Smoky Chickpeas, Brown Rice & Quinoa, Roasted Roots",
        dietaries: ["gf", "df", "rsf"]
      }
    ];
  });

  it("renders total items selected", () => {
    wrapper = shallow(<Header itemsSelected={itemsSelected} />);
    const leftSummary = wrapper.find("div.menu-summary-left");
    expect(leftSummary.text()).toContain("2 items");
  });

  it("renders 6 different dietaries", () => {
    wrapper = shallow(<Header itemsSelected={itemsSelected} />);
    const dietaries = wrapper.find("Dietary");
    expect(dietaries.length).toEqual(6);
  });

  it("renders 2 items selected as df", () => {
    wrapper = mount(<Header itemsSelected={itemsSelected} />);
    const dfDietary = wrapper.find('Dietary[dietary="df"]');
    expect(dfDietary.text()).toContain("2x df");
  });

  it("renders just 1 item selected as ve", () => {
    wrapper = mount(<Header itemsSelected={itemsSelected} />);
    const veDietary = wrapper.find('Dietary[dietary="ve"]');
    expect(veDietary.text()).toContain("1x ve");
  });

  it("renders no Dietary when no item is selected", () => {
    itemsSelected = [];
    wrapper = mount(<Header itemsSelected={itemsSelected} />);
    expect(wrapper.find("Dietary").length).toEqual(0);
  });
});
