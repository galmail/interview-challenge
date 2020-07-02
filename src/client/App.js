import React, { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Menu from "./components/Menu";
import Header from "./components/Header";

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
      <Header></Header>
      <div className="container menu-builder">
        <div className="row">
          <Sidebar onItemSelected={toggleItem}></Sidebar>
          <Menu items={itemsSelected}></Menu>
        </div>
      </div>
    </div>
  );
}

export default App;
