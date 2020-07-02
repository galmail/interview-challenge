import React, { useState, useEffect } from "react";
import Item from "../Item";

const ITEMS_ENDPOINT = "http://localhost:3000/api/items";

function Sidebar({ onItemSelected }) {
  const [items, setItems] = useState([]);
  const fetchItems = () =>
    fetch(ITEMS_ENDPOINT)
      .then(response => response.json())
      .then(data => data.items);

  useEffect(() => {
    fetchItems().then(setItems);
  }, []);

  return (
    <div className="col-4">
      <div className="filters">
        <input className="form-control" placeholder="Name" />
      </div>
      <ul className="item-picker">
        {items &&
          items.map(item => (
            <Item
              onClick={() => onItemSelected(item)}
              key={item.id}
              {...item}
            ></Item>
          ))}
      </ul>
    </div>
  );
}

export default Sidebar;
