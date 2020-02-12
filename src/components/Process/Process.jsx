import React from 'react';
import { Row, Col, Card, Image } from 'react-bootstrap';

class Process extends React.Component {
  render() {
    return (
      <div className="container-md">
        <Row>
          <Col>
            <Card>
              <Card.Img className="img-full" src="images/process-main.jpg" />
            </Card>
            <Card.Body>
              <Card.Title>The Donor</Card.Title>
              <Card.Text>
                <p>
                  The donor vehicle for a 911 Backdate project is a Porsche 964
                  of the client’s choosing. High mileage examples are a budget
                  friendly choice if the Backdate will encompass a complete
                  engine rebuild and/or modification. However, for a Backdate
                  that entails minor to no engine and performance work, and
                  which is focused primarily with chassis style modifications
                  and interior customization, a lower mileage example would be
                  ideal. Clients may provide their own Porsche 964 as the donor
                  or a donor may be purchased from Abreu Motors. The cost of the
                  donor will affect the final cost of the 911 Backdate project
                  proportionately.
                </p>
                <p>
                  <i>
                    *The 964 has specifically been chosen due to its
                    aerodynamics, 3.6L engine, ABS brakes, automatic electric
                    spoiler and functional air-conditioning, amongst other
                    technological advancements that set it apart from its
                    predecessors.
                  </i>
                </p>
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
        <Row className="card-container">
          <Col md>
            <Card>
              <Card.Img src="images/process-1.jpg" />
            </Card>
            <Card.Body>
              <Card.Title>Body Conversion</Card.Title>
              <Card.Text>
                All 911 Backdates receive a metal body conversion to the Porsche
                ST style of the 70’s, with all Porsche/OEM components.
              </Card.Text>
            </Card.Body>
          </Col>
          <Col md>
            <Card>
              <Card.Img src="images/process-2.jpg" />
            </Card>
            <Card.Body>
              <Card.Title>Performance Modification</Card.Title>
              <Card.Text>
                <i>Clients have the following options:</i>
                <ul>
                  <li>Refresh of the Original 3.6L Engine</li>
                  <li>Complete Rebuild of the Original 3.6L Engine</li>
                  <li>
                    Complete Rebuild and Conversion from 3.6L to 3.8L Engine
                  </li>
                  <li>Transmission Rebuild</li>
                  <li>Exhaust Conversion to Dual Center Pipe</li>
                  <li>Suspension</li>
                  <li>Brakes</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Col>
          <Col md>
            <Card>
              <Card.Img src="images/process-3.jpg" />
            </Card>
            <Card.Body>
              <Card.Title>Exterior Style Components</Card.Title>
              <Card.Text>
                <i>Clients have the following options:</i>
                <ul>
                  <li>Paint Color of Choice</li>
                  <li>Badging Color (from pre-selected options)</li>
                  <li>Trim Finish (from pre-selected options)</li>
                  <li>Headlights (from pre-selected options)</li>
                  <li>Brake Caliper Color of Choice</li>
                  <li>Fuchs Wheel Color (from pre-selected options)</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <Card.Img className="img-full" src="images/project-pic.jpg" />
            </Card>
            <Card.Body>
              <Card.Title>Interior Style Components</Card.Title>
              <Card.Text>
                <i>Clients have the following options:</i>
                <ul>
                  <li>Italian Leather Color / Imprint / Pattern</li>
                  <li>Carpet Color</li>
                  <li>Instrument Panel Color</li>
                  <li>Steering Wheel</li>
                  <li>Seat Style</li>
                  <li>Pedals</li>
                  <li>Gear Shifter</li>
                  <li>Radio</li>
                  <li>
                    Interior Trims Finish / Color (from pre-selected options)
                  </li>
                </ul>
                <i>
                  *Please note, all options affect the final cost of each
                  individual project proportionately.
                </i>
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
        <Row>
          <Col>
            <Image fluid src="images/detail-2.jpg" />
          </Col>
          <Col>
            <Image fluid src="images/detail-1.jpg" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Image fluid src="images/detail-3.jpg" />
          </Col>
          <Col>
            <Image fluid src="images/detail-4.jpg" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Image fluid src="images/detail-5.jpg" />
          </Col>
          <Col>
            <Image fluid src="images/detail-6.jpg" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Image fluid src="images/detail-7.jpg" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Image fluid src="images/detail-8.jpg" />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Process;