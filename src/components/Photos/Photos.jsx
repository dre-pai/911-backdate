import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import "./Photos.css";
import ProjectGallery from "../ProjectGallery/ProjectGallery";
import {
  S3Client,
  // This command supersedes the ListObjectsCommand and is the recommended way to list objects.
  ListObjectsV2Command,
} from "@aws-sdk/client-s3";

class Photos extends React.Component {
  constructor() {
    super();
    this.state = {
      images: [],
    };
  }

  async galleryClick(selectedGallery) {
    const client = new S3Client({ region: "us-east-1" });

    const command = new ListObjectsV2Command({
      Bucket: "911-backdate-bucket",
    });

    try {
      let isTruncated = true;

      console.log("Your bucket contains the following objects:\n");
      let contents = "";

      while (isTruncated) {
        const { Contents, IsTruncated, NextContinuationToken } =
          await client.send(command);
        const contentsList = Contents.map((c) => ` • ${c.Key}`).join("\n");
        contents += contentsList + "\n";
        isTruncated = IsTruncated;
        command.input.ContinuationToken = NextContinuationToken;
      }
      console.log(contents);
    } catch (err) {
      console.error(err);
    }

    // let data = [];
    // const src = "images/gallery/" + selectedGallery + "/";
    // axios.get("/api/images?folder=" + selectedGallery).then((res) => {
    //   for (let i = 0; i < res.data.length; i++) {
    //     let val = src + res.data[i];
    //     data.push({
    //       src: val,
    //       thumbnail: val,
    //     });
    //   }
    //   this.setState({
    //     images: data,
    //   });
    //   document.getElementById("ReactGridGallery").scrollIntoView();
    //   setTimeout(
    //     () => document.getElementById("ReactGridGallery").scrollIntoView(),
    //     1000
    //   );
    // });
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
                onClick={() => this.galleryClick("carbon-gray")}
                src="images/gallery/carbon-gray/main.jpg"
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
                src="images/steel-gray-main.JPG"
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
                src="images/dbthumb.JPG"
                fluid
              />
            </div>
          </Col>
          <Col>
            <div>
              <Image
                onClick={() => this.galleryClick("grayblue-backdate")}
                src="images/lbthumb.JPG"
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
        {/* <Row className="projectRow">
          <Col>
            <div>
              <Image
                onClick={() => this.galleryClick("orange-ss")}
                src="images/gallery/orange-ss/icon.jpg"
                fluid
              />
            </div>
          </Col>
          <Col>
            <div>
              <Image
                onClick={() => this.galleryClick("red-ss")}
                src="images/gallery/red-ss/icon.jpg"
                fluid
              />
            </div>
          </Col>
          <Col></Col>
        </Row> */}
        <ProjectGallery images={this.state.images} />
      </div>
    );
  }
}

export default Photos;
