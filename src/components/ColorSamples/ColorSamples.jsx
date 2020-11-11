import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import './ColorSamples.css';

class ColorSamples extends React.Component {
  thumbnailClick(event) {
    let mainImage = document.getElementById('colorImage');
    let selectedColor = document.getElementById('colorName');
    let color = event.target.getAttribute('alt');
    let imgPath = event.target.getAttribute('src');

    mainImage.setAttribute('src', imgPath);
    selectedColor.textContent = color;
  }

  render() {
    return (
      <div className="container-md">
        <Row>
          <Col>
            <Image
              id="colorImage"
              fluid
              src="images/backdate-colors/Orange-Metalic.jpg"
            />
            <div id="colorName">Orange Metallic</div>
          </Col>
        </Row>
        <Row className="colorRow">
          <Col>
            <Image
              fluid
              src="images/backdate-colors/Emerald-green.jpg"
              alt="Emerald Green"
              onClick={this.thumbnailClick}
            />
          </Col>
          <Col>
            <Image
              fluid
              src="images/backdate-colors/Gray-metalic.jpg"
              alt="Gray Metallic"
              onClick={this.thumbnailClick}
            />
          </Col>
          <Col>
            <Image
              fluid
              src="images/backdate-colors/Guards-Red.jpg"
              alt="Guards Red"
              onClick={this.thumbnailClick}
            />
          </Col>

          <Col>
            <Image
              fluid
              src="images/backdate-colors/Ipanema-Blue.jpg"
              alt="Ipanema Blue"
              onClick={this.thumbnailClick}
            />
          </Col>

          <Col>
            <Image
              fluid
              src="images/backdate-colors/signal-yellow.jpg"
              alt="Signal Yellow"
              onClick={this.thumbnailClick}
            />
          </Col>
          <Col>
            <Image
              fluid
              src="images/backdate-colors/Oak-Green.jpg"
              alt="Oak Green"
              onClick={this.thumbnailClick}
            />
          </Col>
          <Col>
            <Image
              fluid
              src="images/backdate-colors/Orange-Metalic.jpg"
              alt="Orange Metallic"
              onClick={this.thumbnailClick}
            />
          </Col>
          <Col>
            <Image
              fluid
              src="images/backdate-colors/Royal-Purple.jpg"
              alt="Royal Purple"
              onClick={this.thumbnailClick}
            />
          </Col>

          <Col>
            <Image
              fluid
              src="images/backdate-colors/Rubystone-Red.jpg"
              alt="Rubystone Red"
              onClick={this.thumbnailClick}
            />
          </Col>
          <Col>
            <Image
              fluid
              src="images/backdate-colors/Salmon.jpg"
              alt="Salmon"
              onClick={this.thumbnailClick}
            />
          </Col>
          <Col>
            <Image
              fluid
              src="images/backdate-colors/Tahoe-Blue.jpg"
              alt="Tahoe Blue"
              onClick={this.thumbnailClick}
            />
          </Col>
          <Col>
            <Image
              fluid
              src="images/backdate-colors/Voodoo-Blue.jpg"
              alt="Voodoo Blue"
              onClick={this.thumbnailClick}
            />
          </Col>
          <Col>
            <Image
              fluid
              src="images/backdate-colors/Azure-Blue.jpg"
              alt="Azure Blue"
              onClick={this.thumbnailClick}
            />
          </Col>
          <Col>
            <Image
              fluid
              src="images/backdate-colors/White.jpg"
              alt="White"
              onClick={this.thumbnailClick}
            />
          </Col>
          <Col>
            <Image
              fluid
              src="images/backdate-colors/Violet-Purple.jpg"
              alt="Violet Purple"
              onClick={this.thumbnailClick}
            />
          </Col>
          <Col>
            <Image
              fluid
              src="images/backdate-colors/Cognoac-Brown.jpg"
              alt="Cognac Brown"
              onClick={this.thumbnailClick}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default ColorSamples;
