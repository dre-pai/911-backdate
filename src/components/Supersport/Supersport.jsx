import "./Supersport.css";
import { Row, Col, Image } from "react-bootstrap";

function Supersport() {
  return (
    <div className="container-ss">
      <Row className="vid-row" id="supersport-vid">
        <video
          src="https://911-backdate-bucket.s3.amazonaws.com/supersport-rolling.mp4"
          playsinline="playsinline"
          autoplay="autoplay"
          loop="loop"
          muted="muted"
        ></video>
      </Row>
      <Row>
        <Col>
          <div className="img-right">
            <Image src="images/supersport-fr.jpg" fluid />
          </div>
          <p className="first-p">
            We are pleased to announce the launch of the SuperSport Backdate.
            Designed as a modern interpretation of Porsche's timeless long-hood
            body style, it retains the signature retro 1970s glam while
            embracing graciously proportioned aerodynamic body elements and
            modern innovative details. The result is an enticing, high-drama
            adaptation that is naturally smart and seriously sexy.
          </p>
          <p>
            With the SuperSport project, we have strived to make a statement
            while preserving the purity and history of the vehicle's original
            form. From inspiration to installation, no detail has been spared.
            Beyond a vanity project, the SuperSport was born from a passionate
            devotion to improvement and innovation. Characterized by its
            935-inspired rocker panels, bespoke ducktail, low-profile bespoke
            bumpers, custom functional diffuser, and electric bespoke mirrors,
            the SuperSport has seamlessly transitioned itself between decades of
            long-hood design without sacrificing material harmony. It is both
            cultivated and wild.
          </p>
          <p>
            While the exterior design indulges the appetite for a modernized
            stance and profile, the revision goes beyond pure ornamentation to
            achieve purpose and function. The uniquely SuperSport body style
            components are composed entirely of lightweight carbon fiber,
            successfully decreasing the total body weight. Paired with other
            performance enhancements such as the 4.0L twin-plug engine with 993
            cams, 993 crankshaft, Capricorn 4.0L pistons (3996 cc, 102.7 mm
            bore, 80.4 mm stroke, 11.5:1 CR, 23.0 mm x 54.5 mm pin dia, 420g),
            18-inch Fikse wheels, lightweight flywheel, electric power steering,
            short shifter, NPR G50 torque flow limited-slip differential, custom
            stainless exhaust system, open valve available for exhaust, electric
            AC system with wasp alternator billet aluminum housing, internal
            fan, 8-phase, at item 75 amps and max 240 amps, the overall
            horsepower has increased to 400, further elevating the already
            revelatory air-cooled driving experience.
          </p>
          <p>
            The underside of the vehicle harbors hidden details such as
            stainless steel braided lines, an advanced Ohlins or Bilstein
            suspension system, Brembo GT brakes, bespoke front axle lift, bump
            steer tie rods, 935 rear spring plates, adjustable drop links,
            adjustable sway bars, a center exit exhaust, and 935-inspired
            exhaust tips, plus many additional Motorsports parts. All underbody
            components are powder-coated with various accents in the color(s) of
            choice, which brings us to...
          </p>
          <p>
            The biggest question, the toughest choice, often the most difficult
            decision - which colors to choose. We offer color guidance when
            needed, as well as a virtual color consultation, bringing any
            alluring color choice to life, whether it's a favorite from history
            or a luxurious hue that is uniquely you. This is a tremendous aid in
            the decision-making process.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="img-left">
            <Image src="images/supersport-bl.jpg" fluid />
          </div>
          <p>
            The cabin of the vehicle is entirely custom. Each element of the
            interior is easily adapted to the preference of the client, from the
            bezels to the styling of doors and dash, each detail part of its
            owner's signature. It begins with a generous leather-lined interior,
            indulgent while maintaining the charm of the early 911s, with basket
            weave inserts and seat centers, metal grommets, and ornamentation
            reminiscent of a beautifully preserved classic. Meanwhile, carefully
            curated modern elements are infused throughout the cabin, like the
            composite floor tub, Porsche Radio with Bluetooth, ambiance lights,
            radar detector, Navigation System, and a new electric A/C system.
          </p>
          <p>
            Other features within the cabin include the Momo steering wheel and
            bespoke horn button, instrument panel in the design of preference, a
            redesigned center console with CNC bespoke shifter, and custom
            carbon sport seats that comfortably envelop the driver. Carpeting
            and mats in performance fabric ensure durability.
          </p>
          <p>
            We also offer an interior for the SuperSport that reflects a more
            modern aesthetic, with features like a rear composite panel in lieu
            of the traditional seat arrangement, alternative leather styling,
            carbon fiber interior features, steering wheel, shifter, pedals, and
            more.
          </p>
          <p>
            Our clients are encouraged to share their design preferences as they
            embark with us on a creative endeavor to see their unique vision
            achieved, and we are delighted to offer design advice to help with
            the decision-making process. We understand that the aesthetic range
            can be vast and that each client is creating their own unique
            soundtrack. In the end, the car should feel intimately yours, the
            interior should be a sanctuary, and the driving experience should
            make you feel like you're living your best life.
          </p>
          <p>For more information, you can reach us at info@abreumotors.com.</p>
        </Col>
      </Row>
      <Row>
        <a
          id="pdf-button"
          href="https://911-backdate-bucket.s3.amazonaws.com/super-sport.pdf"
          target="_blank"
        >
          VIEW BROCHURE
        </a>
      </Row>
      <Row>
        <Col className="supersport-img-col">
          <Image src="images/sketch-front.jpg" fluid />
        </Col>
        <Col className="supersport-img-col">
          <Image src="images/sketch-back.jpg" fluid />
        </Col>
      </Row>
      <Row>
        <Col className="supersport-img-col">
          <Image src="images/sketch-side.jpg" fluid />
        </Col>
        <Col className="supersport-img-col">
          <Image src="images/sketch-top.jpg" fluid />
        </Col>
      </Row>
      <Row>
        <Col className="supersport-img-col">
          <Image src="images/supersport-main.jpg" fluid />
        </Col>
      </Row>
      <Row>
        <Col className="supersport-img-col" md>
          <Image src="images/supersport-top.jpg" fluid />
        </Col>
        <Col className="supersport-img-col" md>
          <Image src="images/supersport-profile.jpg" fluid />
        </Col>
      </Row>
      <Row>
        <Col className="supersport-img-col" md>
          <Image src="images/interior-2.jpg" fluid />
        </Col>
        <Col className="supersport-img-col" md>
          <Image src="images/interior-1.jpg" fluid />
        </Col>
      </Row>
      <Row>
        <Col className="supersport-img-col">
          <Image src="images/ss3.jpg" fluid />
        </Col>
      </Row>
    </div>
  );
}

export default Supersport;
