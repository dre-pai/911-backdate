import React from 'react';
import './Video.css'
import { Row } from 'react-bootstrap';

class Video extends React.Component {
  render() {
    return (
      <Row className="vid-row">
        <video src="videos/shop.mp4" controls playsinline="playsinline" autoplay="autoplay"></video>
      </Row>
    );
  }
}

export default Video;
