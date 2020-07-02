import React, { useState, useEffect } from "react";
import Item from "../Item";

const ITEMS_ENDPOINT = "http://localhost:3000/api/items";

const fn = () => {};

function Sidebar({ onItemSelected = fn, onItemsFetched = fn }) {
  const [items, setItems] = useState([]);
  const [filterByName, setFilterByName] = useState("");

  const fetchItems = () =>
    fetch(ITEMS_ENDPOINT)
      .then(response => response.json())
      .then(data => data.items)
      .catch(e => {
        console.error("Error fetching items!", e);
        return [];
      });

  useEffect(() => {
    fetchItems()
      .then(setItems)
      .finally(onItemsFetched);
  }, []);

  return (
    <div className="col-4">
      <div className="filters">
        <input
          className="form-control"
          placeholder="Name"
          value={filterByName}
          onChange={e => setFilterByName(e.target.value)}
        />
      </div>
      <ul className="item-picker">
        {items
          .filter(
            item =>
              !filterByName ||
              item.name.toLowerCase().includes(filterByName.toLowerCase())
          )
          .map(item => (
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
