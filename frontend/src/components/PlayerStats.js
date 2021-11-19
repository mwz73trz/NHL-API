import { Component } from "react";

class PlayerStats extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.stats.games}</td>
        <td>{this.props.stats.points}</td>
        <td>{this.props.stats.goals}</td>
        <td>{this.props.stats.assists}</td>
        <td>{this.props.stats.shots}</td>
        <td>{this.props.stats.shotPct}%</td>
        <td>{this.props.stats.plusMinus}</td>
      </tr>
    );
  }
}

export default PlayerStats;
