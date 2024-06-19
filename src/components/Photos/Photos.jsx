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
        <Row className="projectRow">
          <Col>
            <div>
              <Image
                onClick={() => this.galleryClick("jose-green")}
                src="images/gallery/jose-green/main.jpg"
                fluid
              />
            </div>
          </Col>
          <Col>
            <div>
              <Image
                onClick={() => this.galleryClick("orange-targa")}
                src="images/gallery/orange-targa/main.jpg"
                fluid
              />
            </div>
          </Col>
        </Row>

        <Row className="projectRow">
          <Col>
            <div>
              <Image
                onClick={() => this.galleryClick("carbon")}
                src="images/gallery/carbon/main.jpg"
                fluid
              />
            </div>
          </Col>
          <Col>
            <div>
              <Image
                onClick={() => this.galleryClick("black-gold")}
                src="images/gallery/black-gold/icon.jpg"
                fluid
              />
            </div>
          </Col>
        </Row>
        <Row className="projectRow">
          <Col>
            <div>
              <Image
                onClick={() => this.galleryClick("steel-gray")}
                src="images/gallery/steel-gray/steel-gray-main.jpg"
                fluid
              />
            </div>
          </Col>
          <Col>
            <div>
              <Image
                onClick={() => this.galleryClick("gray-backdate")}
                src="images/gray-th.jpg"
                fluid
              />
            </div>
          </Col>
        </Row>
        <Row className="projectRow">
          <Col>
            <div>
              <Image
                onClick={() => this.galleryClick("green-backdate")}
                src="images/green-th.jpg"
                fluid
              />
            </div>
          </Col>
          <Col>
            <div>
              <Image
                onClick={() => this.galleryClick("blue-backdate")}
                src="images/blue-th.jpg"
                fluid
              />
            </div>
          </Col>
        </Row>
        <Row className="projectRow">
          <Col>
            <div>
              <Image
                onClick={() => this.galleryClick("dkblue-backdate")}
                src="images/gallery/dkblue-backdate/thumb.jpg"
                fluid
              />
            </div>
          </Col>
          <Col>
            <div>
              <Image
                onClick={() => this.galleryClick("grayblue-backdate")}
                src="images/gallery/grayblue-backdate/thumb.jpg"
                fluid
              />
            </div>
          </Col>
        </Row>
        <Row className="projectRow">
          <Col>
            <div>
              <Image
                onClick={() => this.galleryClick("blue-ss")}
                src="images/gallery/blue-ss/icon.jpg"
                fluid
              />
            </div>
          </Col>
          <Col>
            <div>
              <Image
                onClick={() => this.galleryClick("gray-ss")}
                src="images/gallery/gray-ss/icon.jpg"
                fluid
              />
            </div>
          </Col>
        </Row>

        {this.state.images.length > 0 && (
          <ProjectGallery images={this.state.images} />
        )}
      </div>
    );
  }
}

export default Photos;
