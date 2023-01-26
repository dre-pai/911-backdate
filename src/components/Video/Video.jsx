import React from 'react';
import './Video.css'
import { Row } from 'react-bootstrap';

class Video extends React.Component {
  render() {
    return (
      <Row className="vid-row">
        <video src="videos/supersport.m4v" playsinline="playsinline" autoplay="autoplay" loop="loop" muted="muted"></video>
      </Row>
    );
  }
}

export default Video;
