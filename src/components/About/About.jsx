import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

class About extends React.Component {
  render() {
    return (
      <div className="container-md">
        <Row>
          <Col>
            <Image src="images/vision-blue.jpg" fluid />
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              <b>
                If you have ever had a vision, you know that it began with
                inspiration. The 911 Backdate is no exception, and to this we
                owe tremendous gratitude to the designers, artists, and
                innovators who began this trend and paved the way before us.
              </b>
            </p>
            <p>
              If you truly love the world of motorsports and racing, there is no
              denying that the classic Porsche 911 holds an indelible place in
              history for its achievements in the world of race engineering. For
              most of us it holds a place in the deep nostalgic recesses of
              childhood memories thanks to innumerable Hollywood cameos and its
              star-studded ownership. And it must certainly hold a place of
              reverence in our minds for its uncanny ability to maintain such
              allure, sophistication, admiration, and sex appeal for well beyond
              5 decades. The fact that the air-cooled engine has not been in
              production since most of us reached puberty is the final, case
              winning evidence for the argument of preservation.
            </p>
            <p>
              However, there is a deep sadness at the thought of leaving these
              iconic road marvels to sit idle, untouched, unseen, and often
              undriven. Condition 1 and 2 examples, yes, they are relics, pieces
              of art, and it must be so. But for the high-mileage examples on
              the market that are in dire need of an engine restoration and
              interior refresh, the concept of a completely customized OEM
              resto-mod felt like a waking dream and no doubt answered the
              prayers for many a Porsche enthusiast.
            </p>
            <p>
              For our clients, it really feels like a wish come true when the
              911 Backdate reaches completion. A Porsche 964 uniquely their own
              that is meant to be seen and enjoyed, but most importantly, meant
              to be driven. This is our vision. Providing this kind of
              satisfaction for our die-hard Porsche enthusiast clientele is our
              vision. Finding a level of restoration that fits the unique budget
              of each customer is our vision. And maintaining the authenticity
              and respect for the Porsche brand by priding ourselves in the
              quality of our products and craftsmanship is our vision.
            </p>
            <p>
              We achieve this by staying true to the classic architecture of the
              1970 Porsche ST in our chassis modifications. The metal
              conversion, and all interior and exterior components are replaced
              with genuine Porsche and OEM parts if they are available on the
              market. Only the finest materials are used in all areas of each
              custom project, and all alterations to the original are both
              tasteful and historically accurate. While certain design elements
              and features are proprietary in nature and are present in every
              Backdate 911, most style options and performance modifications are
              unique to its owner, making each version one-of-a-kind.
            </p>
            <p>
              It is a shared passion for Porsche that brings us together with
              our customers and it is our hope that each 911 Backdate will be
              treasured by our clients for not only the quality and
              craftsmanship, but also for the pleasure they experience by being
              artistically involved in its creation. If you are interested in
              learning more, please feel free to contact us, and we would be
              happy to discuss your vision for your very own 911 Backdate.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Image src="images/res-interior.jpg" fluid />
          </Col>
        </Row>
        <Row>
          <Col>
            <Image src="images/front.jpg" fluid />
          </Col>
          <Col>
            <Image src="images/rear.jpg" fluid />
          </Col>
        </Row>
      </div>
    );
  }
}

export default About;
