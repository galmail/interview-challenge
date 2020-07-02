import React from "react";
import "../../setupTests";
import { shallow, mount } from "enzyme";
import Item from "./Item";
import expectExport from "expect";

describe("Item", () => {
  let wrapper;

  const item = {
    id: 111,
    name: "pizza margherita",
    dietaries: ["v", "ve"]
  };

  it("will not render the x button by default", () => {
    wrapper = shallow(<Item {...item} />);
    expect(wrapper.find("button").exists()).toBeFalsy();
  });

  it("will render the x button if we pass onRemove callback", () => {
    wrapper = shallow(<Item {...item} onRemove={() => {}} />);
    expect(wrapper.find("button").exists()).toBeTruthy();
  });

  it("will call onRemove when the x button is clicked", () => {
    const onRemove = jest.fn();
    wrapper = shallow(<Item {...item} onRemove={onRemove} />);
    wrapper.find("button.remove-item").simulate("click");
    expect(onRemove).toHaveBeenCalled();
  });

  it("will call onClick when an item is clicked", () => {
    const onClick = jest.fn();
    wrapper = shallow(<Item {...item} onClick={onClick} />);
    wrapper.find("li.item").simulate("click");
    expect(onClick).toHaveBeenCalled();
  });
});
