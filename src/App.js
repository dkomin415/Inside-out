import React from 'react';
import "./App.css";
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from './components/Welcome/Welcome';
import Services from './components/Info/Services';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" />
        <Route path="/projects" />
        <Route path="/services" />
        <Route path="/contact" />
      </Routes>
      <main>
      <Welcome />
      <Services />
      </main>
    </Router>

  );
}

export default App;
