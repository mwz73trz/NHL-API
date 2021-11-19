import { Component } from "react";
import { Link } from "react-router-dom";

class TeamPlayers extends Component {
  render() {
    return (
      <span>
        <Link to={`/players/${this.props.roster.person.id}`}>
          {this.props.roster.person.fullName}
        </Link>
      </span>
    );
  }
}

export default TeamPlayers;
