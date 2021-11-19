import { Component } from "react";
import { Link } from "react-router-dom";
import nhlAPI from "../api/nhlAPI";
import TeamDetail from "../components/TeamDetail";
import UserContext from "../contexts/UserContext";

class TeamDetailPage extends Component {
  state = {
    team: null,
  };

  getTeam = async () => {
    try {
      let teamId = this.props.match.params.teamId;
      let token = this.context ? this.context.token : null;
      let teamDetails = await nhlAPI.getTeamById(teamId, token);
      let teamData = teamDetails.teams;
      if (teamData) {
        this.setState({ team: teamData });
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getTeam();
  }
  renderTeam() {
    if (!this.state.team) {
      return <p>No Team Found!</p>;
    }
    return (
      <div>
        <TeamDetail team={this.state.team} />
      </div>
    );
  }

  render() {
    return (
      <div>
        <h1>Team Details Page</h1>
        {this.renderTeam()}
        <Link to={`/`}>BACK TO TEAMS</Link>
      </div>
    );
  }
}

TeamDetail.contextType = UserContext;

export default TeamDetailPage;
