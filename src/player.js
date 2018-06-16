import React, { Component } from "react";

import PlayerApi from "./playerApi.js";

class Player extends Component {
  player = PlayerApi.getPlayer(this.props.match.params.number);
  render() {
    return (
      <div>
        <h1>
          {this.player.name} (#{this.player.number})
        </h1>
      </div>
    );
  }
}

export default Player;
