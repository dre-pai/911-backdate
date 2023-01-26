import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import './Design.css';

class Design extends React.Component {
  render() {
    return (
      <div id="design-wrap">
        <div className="design-edition">
          <h4>Classic Touring Edition</h4>
          <Row>
            <Col sm>
              <Image fluid src="images/silv-front.jpg" />
            </Col>
            <Col sm>
              <Image fluid src="images/silv-rear.jpg" />
            </Col>
          </Row>
        </div>
        <div className="design-edition">
          <h4>Supersport Edition</h4>
          <Row>
            <Col sm>
              <Image fluid src="images/ss1.jpg" />
            </Col>
            <Col sm>
              <Image fluid src="images/ss2.jpg" />
            </Col>
          </Row>
        </div>
        <div className="design-edition">
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
      </div>
    );
  }
}

export default Design;
