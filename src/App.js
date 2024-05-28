import React from "react";
import "./App.css";
import NavBar from "./NavBar.js";
import { Routes, Route } from "react-router-dom";
import Home from "./Home.js";
import About from "./About.js";
import Notes from "./Notes.js";
import Misc from "./Misc.js";

const App = () => (
  <div className="App">
    <div className="App-header">
      <NavBar />
    </div>
    <div className="Main">
      <Main />
    </div>
  </div>
);

const Main = () => (
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/about" element={<About />}></Route>
    <Route path="/notes" element={<Notes course="base" />}></Route>
    <Route path="/notes/6.036" element={<Notes course="6.036" />}></Route>
    <Route path="/notes/6.046" element={<Notes course="6.046" />}></Route>
    <Route path="/notes/6.006" element={<Notes course="6.006" />}></Route>
    <Route path="/notes/18.650" element={<Notes course="18.650" />}></Route>
    <Route path="/notes/24.900" element={<Notes course="24.900" />}></Route>
    <Route path="/misc" element={<Misc />}></Route>
  </Routes>
);

export default App;
