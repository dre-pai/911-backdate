import React from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import "./ContactForm.css";
import emailjs from "@emailjs/browser";

emailjs.init({
  publicKey: "ne5rIdwNwWUWWKBV3",
  // Do not allow headless browsers
  blockHeadless: true,
  limitRate: {
    // Set the limit rate for the application
    id: "app",
    // Allow 1 request per 10s
    throttle: 10000,
  },
});

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formErrors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  submitComplete = () => {
    document.getElementById("submit").innerText = "Submit";
    document.getElementById("submit").disabled = false;
  };

  submitSuccessful = () => {
    document.getElementById("reservationForm").reset();
    this.props.updatePageStatus();
  };

  updateFormState = (response) => {
    let errorFields = {};

    if (response.data.errors != null) {
      for (let i = 0; i < response.data.errors.length; i++) {
        let field = response.data.errors[i].param;
        errorFields[field] = "error";
      }
    }

    this.setState({
      formErrors: errorFields,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    try {
      document.getElementById("submit").disabled = true;
      document.getElementById("submit").innerText = "Loading...";

      const templateParams = {
        name: `${document.getElementById("firstName").value} ${
          document.getElementById("lastName").value
        }`,
        clientEmail: document.getElementById("email").value,
        clientPhone: document.getElementById("phone").value,
        message: document.getElementById("comments").value,
      };

      const response = await emailjs.send(
        "default_service",
        "template_5n833aw",
        templateParams
      );

      console.log(response);

      this.submitComplete();

      if (response.status === 200) this.submitSuccessful();
      else {
        this.setState({
          formErrors: { email: "error" },
        });
      }
    } catch (e) {
      console.error(e);
      this.submitComplete();
      this.setState({
        formErrors: { email: "error" },
      });
    }
  };

  render() {
    return (
      <Form id="reservationForm" onSubmit={this.handleSubmit}>
        <Row>
          <Col>
            <Form.Group controlId="firstName">
              <Form.Label>
                First Name<span className="req">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                className={this.state.formErrors.firstName}
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="lastName">
              <Form.Label>
                Last Name<span className="req">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                className={this.state.formErrors.lastName}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group controlId="email">
          <Form.Label>
            Email<span className="req">*</span>
          </Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            className={this.state.formErrors.email}
            required
          />
        </Form.Group>
        <Form.Group controlId="phone">
          <Form.Label>Phone</Form.Label>
          <Form.Control />
        </Form.Group>
        <Form.Group controlId="comments">
          <Form.Label>Comments</Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>
        <Button id="submit" type="submit" variant="primary">
          Submit
        </Button>
      </Form>
    );
  }
}

export default ContactForm;
