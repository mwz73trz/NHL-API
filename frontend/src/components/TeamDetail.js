import { Component } from "react";
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
        </CardBody>
      </Card>
    );
  }
}

export default TeamDetail;
