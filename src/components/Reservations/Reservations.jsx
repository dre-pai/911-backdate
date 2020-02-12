import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ContactForm from '../ContactForm/ContactForm';
import './Reservations.css';

class Reservations extends React.Component {
  constructor() {
    super();
    this.state = { message: '' };
  }

  componentDidMount() {
    fetch('/api/message')
      .then(response => response.json())
      .then(json => this.setState({ message: json }));
  }

  render() {
    return (
      <Row>
        <Col>
          <h1>Backdate Reservations</h1>
          <h2>{this.state.message}</h2>
          <ContactForm />
        </Col>
      </Row>
    );
  }
}

export default Reservations;
