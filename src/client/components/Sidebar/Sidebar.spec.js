import React from "react";
import { act } from "react-dom/test-utils";
import "../../setupTests";
import { shallow, mount } from "enzyme";
import { waitFor } from "@testing-library/dom";
import Sidebar from "./Sidebar";

describe("Sidebar", () => {
  let wrapper;
  let onItemsFetched;

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

  it("renders the menu items", done => {
    fetch.mockResponseOnce(JSON.stringify({ items: menuItems }));
    onItemsFetched = () => {
      expect(fetch).toHaveBeenCalledTimes(1);
      const items = wrapper.find("Item");
      expect(items.length).toEqual(2);
      done();
    };
    act(() => {
      wrapper = shallow(<Sidebar onItemsFetched={onItemsFetched} />);
    });
  });

  it("item was selected", done => {
    const onItemSelected = jest.fn();
    fetch.mockResponseOnce(JSON.stringify({ items: menuItems }));
    onItemsFetched = () => {
      expect(onItemSelected).toHaveBeenCalledTimes(0);
      const items = wrapper.find("Item");
      items.first().simulate("click");
      expect(onItemSelected).toHaveBeenCalledTimes(1);
      done();
    };
    act(() => {
      wrapper = shallow(
        <Sidebar
          onItemSelected={onItemSelected}
          onItemsFetched={onItemsFetched}
        />
      );
    });
  });

  it("filter items by name", done => {
    fetch.mockResponseOnce(JSON.stringify({ items: menuItems }));
    onItemsFetched = () => {
      const input = wrapper.find("input");
      input.simulate("change", { target: { value: "kale" } });
      expect(wrapper.find("Item").length).toEqual(1);
      input.simulate("change", { target: { value: "pizza" } });
      expect(wrapper.find("Item").length).toEqual(0);
      input.simulate("change", { target: { value: "" } });
      expect(wrapper.find("Item").length).toEqual(2);
      done();
    };
    act(() => {
      wrapper = shallow(<Sidebar onItemsFetched={onItemsFetched} />);
    });
  });

  it("renders 0 items when fetch fails", done => {
    fetch.mockAbortOnce();
    onItemsFetched = () => {
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(wrapper.find("Item").length).toEqual(0);
      done();
    };
    act(() => {
      wrapper = shallow(<Sidebar onItemsFetched={onItemsFetched} />);
    });
  });
});
