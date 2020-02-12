import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ContactForm from '../ContactForm/ContactForm';
import './Reservations.css';

class Reservations extends React.Component {
  render() {
    return (
      <Row>
        <Col>
          <h1>Backdate Reservations</h1>
          <ContactForm />
        </Col>
      </Row>
    );
  }
}

export default Reservations;
