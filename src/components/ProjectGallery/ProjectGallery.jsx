import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Gallery from 'react-grid-gallery';

class ProjectGallery extends React.Component {
  render() {
    let images = [];

    for (let i = 1; i < 153; i++) {
      let src = `images/gallery/g (${i}).jpg`;

      let obj = {};

      obj.src = src;
      obj.thumbnail = src;

      images.push(obj);
    }

    return (
      <Row>
        <Col>
          <Gallery images={images} enableImageSelection={false} />
        </Col>
      </Row>
    );
  }
}

export default ProjectGallery;
