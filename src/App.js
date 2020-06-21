import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home"
import Blogs from "./Components/Blogs/Blog"
import Projects from "./Components/Projects/Project"
import Contact from "./Components/Contact"
import './App.css';

function App() {
  return (
    <Router>
        <div className="App">
        <Navbar/>
        <Switch>
            <Route exact path="/blog" component={Blogs}/>
            <Route exact path="/projects" component={Projects}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/" component={Home}/>
        </Switch>
        </div>
    </Router>
  );
}

export default App;
