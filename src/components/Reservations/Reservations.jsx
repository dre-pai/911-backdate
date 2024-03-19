import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import ContactForm from "../ContactForm/ContactForm";
import ThankYou from "../ThankYou/ThankYou";
import "./Reservations.css";

class Reservations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formSubmitted: false,
    };

    this.updatePageStatus = this.updatePageStatus.bind(this);
  }

  updatePageStatus() {
    this.setState({
      formSubmitted: true,
    });
  }

  render() {
    return (
      <div id="reservationPage">
        <Row className="grayRow">
          <Col>
            <div id="formContainer">
              <div id="formHeading">Backdate Reservations</div>
              {this.state.formSubmitted ? (
                <ThankYou />
              ) : (
                <ContactForm updatePageStatus={this.updatePageStatus} />
              )}
            </div>
          </Col>
        </Row>
        <Row>
          <Col
            style={{
              maxHeight: 600,
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Image
              src="images/gallery/steel-gray/Photo Jan 17 2024, 1 23 02 PM (2).jpg"
              fluid
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Reservations;
