import React from 'react';
import { Row } from 'react-bootstrap';
import './Home.css';

class Home extends React.Component {
  componentDidMount() {
    document.getElementById('hero').play();
  }

  render() {
    return (
      <div>
        <Row id="hero-container">
          <video id="hero" src="videos/blue360.mp4" playsinline="playsinline" autoplay="autoplay" loop="loop" muted="muted"></video>
        </Row>
        <Row id="orders">
          <a href="/reservations" id="orders-now" className="orders-text">
            Now Taking Orders
          </a>
          <p id="orders-limited" className="orders-text">
            - Limited Production -
          </p>
        </Row>
      </div>
    );
  }
}

export default Home;
