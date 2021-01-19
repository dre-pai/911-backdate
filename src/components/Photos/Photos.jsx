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
      console.log(res);
      document.getElementById('ReactGridGallery').scrollIntoView();

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
        <Row id="projectRow">
          <Col>
            <div>
              <Image
                onClick={() => this.galleryClick('blue-backdate')}
                src="images/backdate-blue-thumb.jpg"
                fluid
              />
            </div>
          </Col>
          <Col>
            <div>
              <Image
                onClick={() => this.galleryClick('red-backdate')}
                src="images/backdate-red-thumb.jpg"
                fluid
              />
            </div>
          </Col>
          <Col>
            <div>
              <Image
                onClick={() => this.galleryClick('gray-backdate')}
                src="images/backdate-gray-thumb.jpg"
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
