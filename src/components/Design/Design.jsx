import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import './Design.css';

class Design extends React.Component {
  render() {
    return (
      <div>
        <Row id="design-img-row">
          <Col>
            <Image fluid src="images/design.png" />
          </Col>
        </Row>
        <Row className="text-center">
          <Col>
            <Image fluid src="images/design-body-render.jpg" />
          </Col>
        </Row>
        <Row>
          <Col>
            <h4>Coming Soon...</h4>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Design;
