import React from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
const axios = require('axios');

class ContactForm extends React.Component {
  buttonClick() {
    document.getElementById('submit').disabled = true;
    document.getElementById('submit').innerText = 'Loading...';
    let name = `${document.getElementById('firstName').value} ${
      document.getElementById('lastName').value
    }`;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let comments = document.getElementById('comments').value;

    const submitComplete = () => {
      document.getElementById('reservationForm').reset();
      document.getElementById('submit').innerText = 'Submit';
      document.getElementById('submit').disabled = false;
    };

    /*let data = {
      name: name,
      email: email,
      comments: comments
    };
    fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(function(response) {
        if (response.status >= 400) {
          throw new Error('Bad response from server');
        }
        return response.json();
      })
      .then(function(data) {
        submitComplete();
        console.log(data);
        if (data === 'success') {
          console.log('Successful Update!');
        }
      })
      .catch(function(err) {
        console.log(err);
      });*/

    axios
      .post('/api/send', {
        name,
        email,
        comments
      })
      .then(function(response) {
        submitComplete();
        console.log(response);
      })
      .catch(function(error) {
        submitComplete();
        console.log(error);
      });
  }

  render() {
    return (
      <Form id="reservationForm">
        <Row>
          <Col>
            <Form.Group controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group controlId="phone">
          <Form.Label>Phone</Form.Label>
          <Form.Control />
        </Form.Group>
        <Form.Group controlId="comments">
          <Form.Label>Comments</Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>
        <Button id="submit" variant="primary" onClick={this.buttonClick}>
          Submit
        </Button>
      </Form>
    );
  }
}

export default ContactForm;
