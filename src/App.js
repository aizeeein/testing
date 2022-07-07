import React from "react";
import Navbar from "../src/Navbar/Navbar";
import HomePage from "./component/homepage/home";
import ChangeName from "./component/homepage/change";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./create";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
