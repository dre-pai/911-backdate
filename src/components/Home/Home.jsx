import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import "./Home.css";

class Home extends React.Component {
  componentDidMount() {
    document.getElementById("hero").play();
  }

  render() {
    return (
      <div>
        <Row id="hero-container" className="vid-row">
          <video
            src="https://911-backdate-bucket.s3.amazonaws.com/green360.mp4"
            id="hero"
            playsinline="playsinline"
            autoplay="autoplay"
            loop="loop"
            muted="muted"
          ></video>
        </Row>
        {/* <Row className="mobile-photos">
          <Col>
            <Image fluid src="images/front.jpg" />
          </Col>
          <Col>
            <Image fluid src="images/rear.jpg" />
          </Col>
        </Row> */}
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
