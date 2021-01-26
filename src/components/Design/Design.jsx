import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import './Design.css';

class Design extends React.Component {
  render() {
    return (
      <div id="design-wrap">
        <div class="design-edition">
          <Row>
            <Col sm>
              <Image fluid src="images/des-green-front.jpg" />
            </Col>
            <Col sm>
              <Image fluid src="images/des-green-rear.jpg" />
            </Col>
          </Row>
          <h4>Sport Edition</h4>
        </div>
        <div class="design-edition">
          <Row>
            <Col sm>
              <Image fluid src="images/des-rear.jpg" />
            </Col>
            <Col sm>
              <Image fluid src="images/des-pro.jpg" />
            </Col>
          </Row>
          <h4>Super Sport Edition</h4>
        </div>
        <div class="design-edition">
          <Row>
            <Col sm>
              <Image fluid src="images/silv-front.jpg" />
            </Col>
            <Col sm>
              <Image fluid src="images/silv-rear.jpg" />
            </Col>
          </Row>
          <h4>Touring Edition</h4>
        </div>
        <h4 id="design-coming-soon">Specs Coming Soon...</h4>
      </div>
    );
  }
}

export default Design;
