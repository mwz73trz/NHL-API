import { Component } from "react";
import nhlAPI from "../api/nhlAPI";
import PlayerStats from "../components/PlayerStats";
import UserContext from "../contexts/UserContext";

class PlayerStatsPage extends Component {
  state = {
    stats: null,
  };

  getPlayerStats = async () => {
    try {
      let playerId = this.props.match.params.playerId;
      let token = this.context ? this.context.token : null;
      let playerStatsData = await nhlAPI.getPlayerStats(playerId, token);
      this.setState({ stats: playerStatsData });
    } catch (error) {
      console.log(error);
    }
  };
  componentDidMount() {
    this.getPlayerStats();
  }
  renderStats() {
    if (!this.state.stats) {
      return <p>No Player Stats Found!</p>;
    }
    return (
      <div>
        <h1>Current Season Stats</h1>
        <table border="1">
          <thead>
            <tr>
              <th>Games Played</th>
              <th>Points</th>
              <th>Goals</th>
              <th>Assists</th>
              <th>Shots</th>
              <th>Shot Percentage</th>
              <th>Plus/Minus</th>
            </tr>
          </thead>
          <PlayerStats stats={this.state.stats} />
        </table>
      </div>
    );
  }

  render() {
    return <div>{this.renderStats()}</div>;
  }
}

PlayerStatsPage.contextType = UserContext;

export default PlayerStatsPage;
