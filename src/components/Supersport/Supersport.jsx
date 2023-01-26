import './Supersport.css'
import { Row, Col, Image } from 'react-bootstrap';

function Supersport() {
    return (
        <div className="container-ss">
            <Row className="vid-row" id="supersport-vid">
                <video src="videos/supersport.m4v" playsinline="playsinline" autoplay="autoplay" loop="loop" muted="muted"></video>
            </Row>
            <Row>
                <Col>
                    <div className='img-right'>
                        <Image src="images/supersport-fr.jpg" fluid />
                    </div>
                    <p className="first-p">
                        We are pleased to announce the launch of the SuperSport Backdate 911. Designed to be a modern interpretation of Porsche’s timeless long-hood body style, it has retained the signature retro 1970’s glam while embracing graciously proportioned aero dynamic body elements and modern innovative details. The result is an enticing, high drama adaptation that is naturally smart and seriously sexy.
                    </p>
                    <p>
                        With the Supersport Backdate we have strived to make a statement while salvaging the purity and history of the vehicle’s original form.  From inspiration to installation, no attention to detail has been spared.  Beyond a vanity project, the SuperSport was born from a passionate devotion to improvement and innovation.  Characterized by its 991-inspired ducktail, low profile rocker panels, bespoke bumpers and custom diffuser, the Supersport has smoothly transitioned itself between decades of Porsche design without sacrificing material harmony. It is both cultivated and wild.
                    </p>
                    <p>
                        While the exterior design indulges the appetite for a modernized stance and profile, the revision goes beyond pure ornamentation to achieve purpose and function.  The uniquely Supersport body style components are composed entirely of lightweight carbon fiber and have successfully decreased the total body weight.  Paired with other performance enhancements like the 3.9L twin-plug engine conversion, lightweight flywheel, electric power steering, short shifter, and electric AC system, the overall horsepower has increased to 400, further elevating the already revelatory air-cooled driving experience.
                    </p>
                    <p>
                        The underside of the vehicle harbors hidden details like stainless steel braided lines, an advanced Ohlins or Bilstein suspension system, Brembo GT brakes, a center exit exhaust and 935-inspired exhaust tips.  All underbody components are powder coated with various accents in the color(s) of choice, which brings us to....
                    </p>
                    <p>
                        The biggest question, the toughest choice, often the most difficult decision – which colors to choose.  We offer color guidance when needed as well as a virtual color consultation, bringing any alluring color choice to life, whether it’s a favorite from history or a luxurious hue that is uniquely you. This is a tremendous aid in the decision-making process.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className='img-left'>
                        <Image src="images/supersport-bl.jpg" fluid />
                    </div>
                    <p>
                        The cabin of the vehicle is entirely custom.  Each element of the interior is easily adapted to the preference of the client, from the bezels to styling of doors and dash, each detail part of its owner’s signature.  It begins with a generous leather-lined interior, indulgent while maintaining the charm of the early 911’s, with a basket weave dash insert and seat centers, metal grommets, and ornamentation reminiscent of a beautifully preserved classic. Meanwhile, carefully curated modern elements are infused throughout the cabin like the Porsche Radio with Bluetooth and Navigation and a new electric A/C syste.
                    </p>
                    <p>
                        Other features within the cabin include the Momo steering wheel and Porsche horn button, instrument panel in the design of preference, a redesigned center console with wood engraved shifter and custom sport seats that comfortably envelop the driver. Carpeting and mats in performance fabric ensures durability.
                    </p>
                    <p>
                        We also offer an interior for the Supersport that reflects a more modern aesthetic with features like a rear composite panel in lieu of the traditional seat arrangement, alternative leather styling, steering wheel, shifter, pedals, and more.
                    </p>
                    <p>
                        Our clients are encouraged to share their design preferences as they embark with us on a creative endeavor to see their unique vision achieved and we are delighted to offer design advice to help with the decision-making process.  We understand that the aesthetic range can be vast and that each client is creating their own unique soundtrack.  In the end, the car should feel intimately yours, the interior should be a sanctuary, and the driving experience should make you feel like you’re living your best life.
                    </p>
                    <p>
                        For more information you can reach us at info@abreumotors.com.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col className='supersport-img-col'>
                    <Image src="images/supersport-main.jpg" fluid />
                </Col>
            </Row>
            <Row>
                <Col className='supersport-img-col' md>
                    <Image src="images/supersport-top.jpg" fluid />
                </Col>
                <Col className='supersport-img-col' md>
                    <Image src="images/supersport-profile.jpg" fluid />
                </Col>
            </Row>
            <Row>
                <Col className='supersport-img-col' md>
                    <Image src="images/interior-2.jpg" fluid />
                </Col>
                <Col className='supersport-img-col' md>
                    <Image src="images/interior-1.jpg" fluid />
                </Col>
            </Row>
            <Row>

                <Col className='supersport-img-col' md>
                    <Image src="images/blue-with-interior.jpg" fluid />
                </Col>
            </Row>

        </div>
    )
}

export default Supersport