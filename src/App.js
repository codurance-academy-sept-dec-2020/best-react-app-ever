import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom/";
import './App.css';
import CoolVideo from "./pages/CoolVideo/CoolVideo";
import Landing from "./pages/landing/landing";

function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route path="/cool-video">
                    <CoolVideo />
                </Route>
                <Route path="/">
                    <Landing />
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
