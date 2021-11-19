import { Component } from "react";
import nhlAPI from "../api/nhlAPI";
import PlayerDetail from "../components/PlayerDetail";
import UserContext from "../contexts/UserContext";

class PlayerDetailPage extends Component {
  state = {
    player: null,
  };

  getPlayer = async () => {
    try {
      let playerId = this.props.match.params.playerId;
      let token = this.context ? this.context.token : null;
      let playerData = await nhlAPI.getPlayerById(playerId, token);
      console.log(playerData);
      if (playerData) {
        this.setState({ player: playerData });
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getPlayer();
  }
  renderPlayer() {
    if (!this.state.player) {
      return <p>No Player Found!</p>;
    }
    return (
      <div>
        <PlayerDetail player={this.state.player} />
      </div>
    );
  }

  render() {
    return (
      <div>
        <h1>Player Detail Page</h1>
        {this.renderPlayer()}
      </div>
    );
  }
}

PlayerDetailPage.contextType = UserContext;

export default PlayerDetailPage;
