import React from "react";
import Item from "../Item";

function Menu({ items, onItemRemoved }) {
  return (
    <div className="col-8">
      <h2>Menu preview</h2>
      <ul className="menu-preview">
        {items &&
          items.map(item => (
            <Item
              onRemove={() => onItemRemoved(item)}
              key={item.id}
              {...item}
            ></Item>
          ))}
      </ul>
    </div>
  );
}

export default Menu;
