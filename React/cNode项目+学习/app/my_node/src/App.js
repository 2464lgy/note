import React from 'react';
import logo from './logo.svg';
import './App.css';
import RouterIndex from "./router/index";
import { Button } from 'antd';
import MainHeader from "./view/main-header";
import MainFoooter from "./view/main-footer";
import "./view/index.css"

function App() {
  // return (
  //   <RouterIndex />
  //   // <h1>开始喽my_cNode</h1>
  // );
  return <div className="pageWrap">

    {/* <Button type="primary">Button</Button> */}
    <MainHeader />
    <main className="main">
    <RouterIndex />
    </main>
    <MainFoooter />
  </div>
}

export default App;
