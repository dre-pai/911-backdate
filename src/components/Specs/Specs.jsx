import React from 'react';
import { Accordion, Row, Col, Image } from 'react-bootstrap';
import './Specs.css';
import AccordionItem from '../AccordionItem/AccordionItem.jsx'

class Specs extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col className='spec-top'>
            <Image src="images/dkojside.jpg" fluid />
          </Col>
        </Row>
        <Accordion>
          <AccordionItem header="Chassis" eventKey="0">
            <Accordion>
              <AccordionItem header="Style" eventKey="0">
                <p>Our intention for the 911 Backdate conversion process is to fully modify and restore the original Porsche 964 in a way that embodies the style and spirit of the 1970’s 911 ST.  Each vehicle is uniquely enhanced by our client’s vision through their participation and selection of performance modifications and individual style components.</p>
                <p>We offer 2 different versions of the Backdate 911 – Classic and Sport.  Each has its own inherent stylistic and performance components, the colors and finishes of which may be customized by the client. </p>
                <p>Classic – The Classic Backdate 911 is true to aesthetic of the original 911 ST with chrome finish exterior trims and retro design elements.</p>
                <p>Sport – The Sport Backdate 911 features rocker panels painted to match the color of the exterior paint with optional Porsche decals.  Traditionally includes Aero style electric mirrors, sports seats, larger brakes, lightweight battery, 935 style rear exhaust pipes, short shifter, and GT3 RS lightweight flywheel.  Roll cage available.  Client may adjust options as desired.</p>
              </AccordionItem>
              <AccordionItem header="Donor" eventKey="1">
                <p>Each project begins with a matching numbers 964 model donor with a clean title.  All vehicles retain their original VIN number and identity.</p>
              </AccordionItem>
              <AccordionItem header="Chassis Modification and Paint" eventKey="2">
                <p>The donor vehicle is stripped to bare metal, all rust is removed, and underbody is sprayed for rust prevention.  </p>
                <p>Original front and rear fenders are removed and replaced with new metal fenders.</p>
                <p>Original front and rear bumpers are removed and replaced with new bespoke composite bumpers.</p>
                <p>Original hood is replaced with new elongated steel bonnet.</p>
                <p>Original engine decklid is removed and enhanced with a bespoke carbon fiber wing.</p>
                <p>Vehicle will retain the original sunroof unless a sunroof delete is requested.  Sunroof delete is achieved by filling the vacated glass with a fabricated metal insert.</p>
                <p>Bespoke aluminum rocker panels.  </p>
                <p>Extensive 4 stage professional paint preparation and repaint completed.</p>
              </AccordionItem>
            </Accordion>
          </AccordionItem>
          <AccordionItem header="Mechanical" eventKey="1">
            <p><i>*Engine machine work courtesy of our partnership with the esteemed engineers of E-Megatronic of Bridgeport, CT and Holleran’s Performance of Auburn, CA</i></p>
            <p>Clients have the following options:</p>
            <ul>
              <li>Refresh of the Original 3.6L Engine</li>
              <li>Complete Rebuild of the Original 3.6L Engine</li>
              <li>Complete Rebuild of the Original Engine and Conversion from 3.6L to 3.8L Engine, increasing HP to 300 </li>
              <li>Complete Rebuild of the Original Engine and Conversion from 3.6L to 3.9L Engine, increasing HP to 330</li>
              <li>Refresh of the Original 5 speed G50 Transmission</li>
              <li>Complete Rebuild of Original 5 speed G50 Transmission</li>
              <li>Original Factory Exhaust </li>
              <li>Bespoke Stainless Steel Center Muffler with Dual Exit Pipes and Catalytic Bypass </li>
            </ul>
            <p><i>All components are powder or ceramic coated.</i></p>
          </AccordionItem>
          <AccordionItem header="Electrical" eventKey="2">
            <p>Vehicle retains original electrical system with components replaced as necessary per comprehensive inspection.</p>
          </AccordionItem>
          <AccordionItem header="Lighting" eventKey="3">
            <p>All interior lighting replaced and new.  Instrument cluster replaced with LED bulbs.</p>
            <p>Headlights, taillights and turn signal lights replaced and new.  9Eleven headlights feature high output DOT/ECE compliant Bi LED optics.  Multiple style options available.</p>
          </AccordionItem>
          <AccordionItem header="Glass/Mirrors/Trim" eventKey="4">
            <p>New Windshield and Rear Window.  New Side Mirrors available in 3 different style options, including an electrical option.</p>
            <p>Polished aluminum trim is standard on all Backdates.</p>
            <p>Porsche badging and decals per the color/style choice of the client.</p>
          </AccordionItem>
          <AccordionItem header="Wheels/Brakes/Suspension" eventKey="5">
            <p>Wheels are replaced with 17” Bespoke wheels produced by Braid Wheels.  </p>
            <ul>
              <li>Rear	 255-40ZR17</li>
              <li>Front	 225-45ZR17</li>
            </ul>
            <p>Factory 964 brakes are completely rebuilt.  Big Red 993 brakes are offered as an upgrade for an additional cost.  Colors and decals per client preference.</p>
            <p>Standard suspension features the Bilstein PSS10 B16 Coil-Over System offering 10 vehicle adjustment settings.  Client may upgrade to the POR GN01S1 Ohlins Road & Track suspension.</p>
          </AccordionItem>
          <AccordionItem header="Paint" eventKey="6">
            <p>The client may choose any color for their customized Backdate and are not limited to Porsche specific colors.</p>
          </AccordionItem>
          <AccordionItem header="Interior" eventKey="7">
            <p>Interior is completely stripped, restored, and customized with all new factory sound proofing, custom Italian leather, and custom carpets. New Headliner, Light Fixtures, Speaker Bezels, Knobs, and Door Handles.</p>
            <p>Italian Leather Color / Imprint / Pattern / Weave of choice provided by Spinneybeck or Garrett Leather, per the client preference.  </p>
            <p>New Automatic Locks with Auto Key Fab</p>
            <p>New Armrests / Door Pulls per client style of choice</p>
            <p>Customized Instrument Panel </p>
            <p>New Steering Wheel</p>
            <p>New Seats in Seat Style of Choice</p>
            <p>New Seat Belts</p>
            <p>New Pedals</p>
            <p>New Gear Shifter</p>
            <p>New Retroline Bluetooth Radio or Porsche Classic Communication Management System with Bluetooth, Navigation Technology and Apple Car Play, per customer selection</p>
            <p>New Speakers </p>
            <p>New Interior Trims and Finishes</p>
          </AccordionItem>
        </Accordion>
      </div>
    );
  }
}

export default Specs;
