import { Component } from "react";
import nhlAPI from "../api/nhlAPI";
import TeamPlayers from "../components/TeamPlayers";
import UserContext from "../contexts/UserContext";
import TeamDetailPage from "./TeamDetailPage";

class TeamPlayersPage extends Component {
  state = {
    roster: [],
  };

  getTeamPlayers = async () => {
    try {
      let teamId = this.props.match.params.teamId;
      let token = this.context ? this.context.token : null;
      let teamData = await nhlAPI.getTeamPlayers(teamId, token);
      if (teamData) {
        this.setState({ roster: teamData });
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getTeamPlayers();
  }
  renderPlayers() {
    let playerElements = this.state.roster.map((person, index) => {
      return (
        <li key={`value-${index}`}>
          <TeamPlayers roster={person} />
        </li>
      );
    });
    return (
      <ul style={{ listStyle: "none" }}>
        <h1>Roster</h1>
        {playerElements}
      </ul>
    );
  }

  render() {
    return <div>{this.renderPlayers()}</div>;
  }
}

TeamDetailPage.contextType = UserContext;

export default TeamPlayersPage;
