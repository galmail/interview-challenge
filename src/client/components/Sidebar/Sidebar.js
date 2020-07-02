import React, { useState, useEffect } from "react";

const ITEMS_ENDPOINT = "http://localhost:3000/api/items";

function Sidebar() {
  const [items, setItems] = useState([]);
  const fetchItems = () =>
    fetch(ITEMS_ENDPOINT)
      .then(response => response.json())
      .then(data => data.items);

  useEffect(() => {
    console.log("inside use effect");
    fetchItems()
      .then(items => {
        console.log("items are: ", items);
        return items;
      })
      .then(setItems);
  }, []);

  return (
    <div className="col-4">
      <div className="filters">
        <input className="form-control" placeholder="Name" />
      </div>
      <ul className="item-picker">
        {items &&
          items.map(item => (
            <li key={item.id} className="item">
              <h2>{item.name}</h2>
              <p>
                {item.dietaries &&
                  item.dietaries.map((dietary, idx) => (
                    <span key={idx} className="dietary">
                      {dietary}
                    </span>
                  ))}
              </p>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Sidebar;
