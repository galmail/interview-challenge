import React, { useState } from "react";
import "./App.css";
import Sidebar from "../Sidebar";
import Menu from "../Menu";
import Header from "../Header";

function App() {
  const [itemsSelected, setItemsSelected] = useState([]);

  const toggleItem = item => {
    if (itemsSelected.find(menuItem => menuItem.id === item.id)) {
      setItemsSelected(items =>
        items.filter(menuItem => menuItem.id !== item.id)
      );
    } else {
      setItemsSelected(items => [...items, item]);
    }
  };

  return (
    <div className="wrapper">
      <Header itemsSelected={itemsSelected}></Header>
      <div className="container menu-builder">
        <div className="row">
          <Sidebar onItemSelected={toggleItem}></Sidebar>
          <Menu items={itemsSelected} onItemRemoved={toggleItem}></Menu>
        </div>
      </div>
    </div>
  );
}

export default App;
