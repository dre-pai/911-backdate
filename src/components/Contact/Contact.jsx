import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import './Contact.css';

class Contact extends React.Component {
  render() {
    return (
      <div className="contact-page-container">
        <Row>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3589.2107869537276!2d-80.1708838845422!3d25.89544030937111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b20a7a6a7e19%3A0xebf97c42e618b58f!2s1480%20NE%20130th%20St%2C%20North%20Miami%2C%20FL%2033161!5e0!3m2!1sen!2sus!4v1618511267049!5m2!1sen!2sus" width="100%" height="450" allowfullscreen="" loading="lazy"></iframe>
        </Row>
        <Row className="container-md contact-container">
          <Col>
            <div>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> 1480 Northeast 130th Street
            </div>
            <div>North Miami, FL 33161</div>
          </Col>
          <Col>
            <div>
              <FontAwesomeIcon icon={faPhone} /> 317-603-7131
            </div>
            <div>
              <FontAwesomeIcon icon={faEnvelope} /> info@abreumotors.com
            </div>
          </Col>
        </Row>
        <Row className="contact-img-row">
          <Col>
            <Image fluid src="images/detail-8.jpg" />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Contact;
