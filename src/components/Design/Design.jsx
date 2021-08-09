import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import './Design.css';

class Design extends React.Component {
  render() {
    return (
      <div id="design-wrap">
        <Row className="vid-row">
          <video src="videos/dkblue360.m4v" id="vision-vid" playsinline="playsinline" autoplay="autoplay" loop="loop" muted="muted"></video>
        </Row>
        <div class="design-edition">
          <h4>Sport Edition</h4>
          <Row>
            <Col sm>
              <Image fluid src="images/des-green-front2.jpg" />
            </Col>
            <Col sm>
              <Image fluid src="images/des-green-rear2.jpg" />
            </Col>
          </Row>
        </div>
        <div class="design-edition">
          <h4>Super Sport Edition</h4>
          <Row>
            <Col sm>
              <Image fluid src="images/des-rear.jpg" />
            </Col>
            <Col sm>
              <Image fluid src="images/des-pro.jpg" />
            </Col>
          </Row>
        </div>
        <div class="design-edition">
          <h4>Touring Edition</h4>
          <Row>
            <Col sm>
              <Image fluid src="images/silv-front.jpg" />
            </Col>
            <Col sm>
              <Image fluid src="images/silv-rear.jpg" />
            </Col>
          </Row>
        </div>
        <h4 id="design-coming-soon">Specs Coming Soon...</h4>
      </div>
    );
  }
}

export default Design;
