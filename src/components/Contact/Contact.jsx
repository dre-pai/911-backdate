import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';
import './Contact.css';

class Contact extends React.Component {
  render() {
    return (
      <div className="contact-page-container">
        <Row>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3061.9098407880438!2d-86.08164868430518!3d39.87625739625504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886b4d766f58046b%3A0x1f71bb9c55186ce2!2s5296%20E%2065th%20St%2C%20Indianapolis%2C%20IN%2046220!5e0!3m2!1sen!2sus!4v1566940003323!5m2!1sen!2sus"
            width="100%"
            height="450"
            frameBorder="0"
            allowFullScreen=""
            title="map"
          ></iframe>
        </Row>
        <Row className="container-md contact-container">
          <Col>
            <div>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> 5296 E 65th Street
            </div>
            <div>Indianapolis, IN 46220</div>
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
            <Image fluid src="images/blue-rear.jpg" />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Contact;
