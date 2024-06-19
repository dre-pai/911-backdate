import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import "./Photos.css";
import ProjectGallery from "../ProjectGallery/ProjectGallery";
import galleryData from "../../gallery.json";

class Photos extends React.Component {
  constructor() {
    super();
    this.state = {
      images: [],
    };
  }

  galleryClick(selectedGallery) {
    try {
      const data = galleryData[selectedGallery];

      if (!data) return;

      this.setState({
        images: data,
      });

      setTimeout(
        () =>
          document
            .getElementById("ReactGridGallery")
            .scrollIntoView({ behavior: "smooth" }),
        500
      );
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div>
        <Row>
          <Col>
            <h4>- Select a Project -</h4>
          </Col>
        </Row>
        <Row className="project-grid">
          {IMAGES.map(({ key, src }) => (
            <div key={key} className="project-main-image-wrap">
              <Image
                className="project-main-image"
                onClick={() => this.galleryClick(key)}
                tabIndex={0}
                src={src}
              />
            </div>
          ))}
        </Row>

        {this.state.images.length > 0 && (
          <ProjectGallery images={this.state.images} />
        )}
      </div>
    );
  }
}

export default Photos;

const IMAGES = [
  { key: "jose-green", src: "images/gallery/jose-green/main.jpg" },

  { key: "orange-targa", src: "images/gallery/orange-targa/main.jpg" },

  { key: "carbon", src: "images/gallery/carbon/main.jpg" },

  { key: "black-gold", src: "images/gallery/black-gold/icon.jpg" },

  { key: "steel-gray", src: "images/gallery/steel-gray/steel-gray-main.jpg" },

  { key: "gray-backdate", src: "images/gray-th.jpg" },
  { key: "green-backdate", src: "images/green-th.jpg" },

  { key: "blue-backdate", src: "images/blue-th.jpg" },

  { key: "dkblue-backdate", src: "images/gallery/dkblue-backdate/thumb.jpg" },

  {
    key: "grayblue-backdate",
    src: "images/gallery/grayblue-backdate/thumb.jpg",
  },

  { key: "blue-ss", src: "images/gallery/blue-ss/icon.jpg" },

  { key: "gray-ss", src: "images/gallery/gray-ss/icon.jpg" },
];
