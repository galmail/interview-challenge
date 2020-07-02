import React from "react";
import "../../setupTests";
import { shallow, mount } from "enzyme";
import Menu from "./Menu";

describe("Menu", () => {
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

  it("renders the items on the Menu", () => {
    wrapper = shallow(<Menu items={menuItems} />);
    expect(wrapper.find("Item").length).toEqual(2);
  });

  it("onItemRemoved callback will get called when an item is removed ", () => {
    const onItemRemoved = jest.fn();
    wrapper = mount(<Menu items={menuItems} onItemRemoved={onItemRemoved} />);
    wrapper
      .find("button.remove-item")
      .first()
      .simulate("click");
    expect(onItemRemoved).toHaveBeenCalled();
  });

  it("doesn't crush when no items are passed", () => {
    wrapper = shallow(<Menu />);
    expect(wrapper.find("ul.menu-preview").exists()).toBeTruthy();
    expect(wrapper.find("Item").length).toEqual(0);
  });
});
