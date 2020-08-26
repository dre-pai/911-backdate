import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

class Engine extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col>
            <Image fluid src="images/engine-lg-gray.jpg" />
          </Col>
        </Row>
        <Row>
          <Col>
            <h4>Engine Spes Coming Soon...</h4>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Engine;
