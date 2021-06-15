import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import ContactForm from '../ContactForm/ContactForm';
import ThankYou from '../ThankYou/ThankYou';
import './Reservations.css';

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
          <Col>
            <Image src="images/res-shop.jpg" fluid />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Reservations;
