import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Menu from './Menu';
import Header from './Header';

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
