import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home"
import './App.css';

function App() {
  return (
    <Router>
        <div className="App">
        <Navbar/>
        <Home/>
        </div>
    </Router>
  );
}

export default App;
