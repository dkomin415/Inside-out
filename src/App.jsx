import React from 'react';
import "./App.css";
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Home" />
        <Route path="/Projects" />
        <Route path="/Services" />
        <Route path="/Contact" />
      </Routes>
    </Router>

  );
}

export default App;
