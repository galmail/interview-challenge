import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Menu from "./components/Menu";
import Header from "./components/Header";

export default () => (
  <div className="wrapper">
    <Header></Header>
    <div className="container menu-builder">
      <div className="row">
        <Sidebar></Sidebar>
        <Menu></Menu>
      </div>
    </div>
  </div>
);
