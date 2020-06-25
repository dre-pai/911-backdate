import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import './Home.css';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Row id="hero-img-container">
          <Image
            id="hero-img"
            className="img-full"
            src="images/home-blue.jpg"
          />
        </Row>
        <Row className="mobile-photos">
          <Col>
            <Image fluid src="images/front.jpg" />
          </Col>
          <Col>
            <Image fluid src="images/rear.jpg" />
          </Col>
        </Row>
        <Row id="orders">
          <p id="orders-now">- Now Taking Orders -</p>
          <p id="orders-limited">Limited Production</p>
        </Row>
      </div>
    );
  }
}

export default Home;
