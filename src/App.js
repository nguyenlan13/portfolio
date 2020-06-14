import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home"
import Blogs from "./Components/Blogs/Blog"
import './App.css';

function App() {
  return (
    <Router>
        <div className="App">
        <Navbar/>
        <Switch>
            <Route
            path="/blogs" 
            render={({match}) => (<Blogs match={match} />)} />

        </Switch>
        <Home/>
        </div>
    </Router>
  );
}

export default App;
