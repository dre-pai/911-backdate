import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import './Design.css';

class Design extends React.Component {
  render() {
    return (
      <div>
        <Row id="design-img-row">
        <Col>
            <Image fluid src="images/des-rear.jpg" />
          </Col>
          <Col>
            <Image fluid src="images/des-pro.jpg" />
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
