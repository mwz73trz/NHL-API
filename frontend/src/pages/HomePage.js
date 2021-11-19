import { Component } from "react";
import { Link } from "react-router-dom";
import nhlAPI from "../api/nhlAPI";
import Teams from "../components/Teams";
import UserContext from "../contexts/UserContext";

class HomePage extends Component {
  state = {
    teams: [],
  };

  getTeams = async () => {
    try {
      let token = this.context ? this.context.token : null;
      if (token) {
        let allTeams = await nhlAPI.getTeams(token);
        let teamsData = allTeams.teams;
        this.setState({ teams: teamsData });
      }
    } catch (error) {
      console.log(error);
    }
  };
  componentDidMount() {
    this.getTeams();
  }
  renderWelcome() {
    if (!this.context) {
      return (
        <Link to="/login">
          <button>Login</button>
        </Link>
      );
    }
    let teamElements = this.state.teams.map((team, index) => {
      return (
        <li key={`team-${index}`}>
          <Teams team={team} />
        </li>
      );
    });
    return (
      <ul style={{ listStyle: "none" }}>
        <h1>Welcome to your NHL API App {this.context.user.username}</h1>
        <h2>Teams</h2>
        {teamElements}
      </ul>
    );
  }

  render() {
    return <div>{this.renderWelcome()}</div>;
  }
}

HomePage.contextType = UserContext;

export default HomePage;
