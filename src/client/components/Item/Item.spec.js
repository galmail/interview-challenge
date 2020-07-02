import React from "react";
import "../../setupTests";
import { shallow, mount } from "enzyme";
import Item from "./Item";

describe("Item", () => {
  let wrapper;

  it("will not render the x button by default", () => {
    wrapper = shallow(<Item />);
    // NOT IMPLEMENTED YET
  });

  it("will not render the x button if we pass onRemove callback", () => {
    // NOT IMPLEMENTED YET
  });

  it("will call onRemove when the x button is clicked", () => {
    // NOT IMPLEMENTED YET
  });

  it("will call onClick when an item is clicked", () => {
    // NOT IMPLEMENTED YET
  });
});
