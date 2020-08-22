import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Gallery from 'react-grid-gallery';

class ProjectGallery extends React.Component {
  render() {
    return (
      <Row>
        <Col>
          <Gallery images={this.props.images} enableImageSelection={false} />
        </Col>
      </Row>
    );
  }
}

export default ProjectGallery;
