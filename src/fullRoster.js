import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Collapsible, CollapsibleItem } from "react-materialize";

import PlayerApi from "./playerApi.js";

class FullRoster extends Component {
  render() {
    return (
      <div>
        <Collapsible>
          {PlayerApi.getPlayers().map(p => (
            <CollapsibleItem key={p.number} header={p.name} icon="person">
              <Link to={`/roster/${p.number}`}>{p.name + "'s profile"}</Link>
            </CollapsibleItem>
          ))}
        </Collapsible>
        <ul />
      </div>
    );
  }
}

export default FullRoster;
