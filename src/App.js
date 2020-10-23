import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom/";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import CoolVideo from "./pages/CoolVideo/CoolVideo";
import Landing from "./pages/landing/landing";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/cool-video">
            <CoolVideo />
          </Route>
          <Route exact path="/">
            <Landing />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
