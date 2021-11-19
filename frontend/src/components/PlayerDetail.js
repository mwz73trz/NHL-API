import { Component } from "react";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";

class PlayerDetail extends Component {
  render() {
    return (
      <Card>
        <CardBody>
          <CardTitle>
            <h2>{this.props.player[0].fullName}</h2>
          </CardTitle>
          <CardText>
            Jersey Number: {this.props.player[0].primaryNumber}
          </CardText>
          <CardText>
            Birthdate: {this.props.player[0].birthDate}/Age:{" "}
            {this.props.player[0].currentAge}
          </CardText>
          <CardText>
            Birth Place: {this.props.player[0].birthCity},{" "}
            {this.props.player[0].birthStateProvince}
          </CardText>
          <CardText>
            Birth Country: {this.props.player[0].birthCountry}/Nationality:{" "}
            {this.props.player[0].nationality}
          </CardText>
          <CardText>
            Height: {this.props.player[0].height}/Weight:{" "}
            {this.props.player[0].weight}
          </CardText>
          <CardText>
            Position: {this.props.player[0].primaryPosition.name}
          </CardText>
        </CardBody>
      </Card>
    );
  }
}

export default PlayerDetail;
