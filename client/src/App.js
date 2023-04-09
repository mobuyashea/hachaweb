import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/style.css";
import Layout from "./Layout";
import Homepage from "./Homepage";
import About from "./About";
import Menu from "./Menu";


function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Layout/> }>
        <Route index element= {<Homepage />}></Route>
        <Route path="/about" element= {<About />}></Route>
        <Route path="/menu" element= {<Menu />}></Route>       
        {/* 其他所有路徑 */}
        <Route path="/*" element= {<Homepage />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>);
}

export default App;
