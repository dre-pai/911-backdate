import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ContactForm from '../ContactForm/ContactForm';
import ThankYou from '../ThankYou/ThankYou';
import './Reservations.css';

class Reservations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formSubmitted: false
    };

    this.updatePageStatus = this.updatePageStatus.bind(this);
  }

  updatePageStatus() {
    this.setState({
      formSubmitted: true
    });
  }

  render() {
    return (
      <Row>
        <Col>
          <h1>Backdate Reservations</h1>
          <div id="formContainer">
            {this.state.formSubmitted ? (
              <ThankYou />
            ) : (
              <ContactForm updatePageStatus={this.updatePageStatus} />
            )}
          </div>
        </Col>
      </Row>
    );
  }
}

export default Reservations;
