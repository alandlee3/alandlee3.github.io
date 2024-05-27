import React from "react";
import "./App.css";
import NavBar from "./NavBar.js";
import { Routes, Route } from "react-router-dom";
import Home from "./Home.js";

const App = () => (
  <div className="App">
    <header className="App-header">
      <NavBar />
    </header>
    <div className="Main">
      <Main />
    </div>
  </div>
);

const Main = () => (
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/about" element={<Home />}></Route>
    <Route path="/notes" element={<Home />}></Route>
    <Route path="/misc" element={<Home />}></Route>
  </Routes>
);

export default App;
