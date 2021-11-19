import { Component } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";

class TeamDetail extends Component {
  render() {
    return (
      <Card>
        <CardBody>
          <CardTitle>{this.props.team[0].name}</CardTitle>
          <CardText>Stadium/Venue: {this.props.team[0].venue.name}</CardText>
          <CardText>City: {this.props.team[0].venue.city}</CardText>
          <CardText>Conference: {this.props.team[0].conference.name}</CardText>
          <CardText>Division: {this.props.team[0].division.name}</CardText>
          <Link to={`/teams/${this.props.team[0].id}/players`}>
            Team Roster
          </Link>
        </CardBody>
      </Card>
    );
  }
}

export default TeamDetail;
