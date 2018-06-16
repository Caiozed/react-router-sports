import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Container } from "react-materialize";

import Home from "./home.js";
import Roster from "./roster.js";
import Schedule from "./schedule.js";

class Main extends Component {
  render() {
    return (
      <main>
        <Container>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/roster" component={Roster} />
            <Route path="/schedule" component={Schedule} />
          </Switch>
        </Container>
      </main>
    );
  }
}

export default Main;
