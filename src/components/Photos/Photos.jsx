import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import './Photos.css';
import ProjectGallery from '../ProjectGallery/ProjectGallery';
const axios = require('axios');

class Photos extends React.Component {
  constructor() {
    super();
    this.state = {
      images: [],
    };
  }

  galleryClick(selectedGallery) {
    let data = [];
    const src = 'images/gallery/' + selectedGallery + '/';
    axios.get('/api/images?folder=' + selectedGallery).then((res) => {

      for (let i = 0; i < res.data.length; i++) {
        let val = src + res.data[i];
        data.push({
          src: val,
          thumbnail: val,
        });
      }

      this.setState({
        images: data,
      });

      document.getElementById('ReactGridGallery').scrollIntoView();

      setTimeout(() => document.getElementById('ReactGridGallery').scrollIntoView(), 1000);
    });
  }

  render() {
    return (
      <div>
        <Row>
          <Col>
            <h4>- Select a Project -</h4>
          </Col>
        </Row>
        <Row className="projectRow">
          <Col>
            <div>
              <Image
                onClick={() => this.galleryClick('gray-backdate')}
                src="images/gray-th.jpg"
                fluid
              />
            </div>
          </Col>
          <Col>
            <div>
              <Image
                onClick={() => this.galleryClick('green-backdate')}
                src="images/green-th.jpg"
                fluid
              />
            </div>
          </Col>
        </Row>
        <Row className="projectRow">
          <Col>
            <div>
              <Image
                onClick={() => this.galleryClick('blue-backdate')}
                src="images/blue-th.jpg"
                fluid
              />
            </div>
          </Col>
          <Col>
            <div>
              <Image
                onClick={() => this.galleryClick('red-backdate')}
                src="images/red-th.jpg"
                fluid
              />
            </div>
          </Col>
        </Row>

        <ProjectGallery images={this.state.images} />
      </div>
    );
  }
}

export default Photos;
