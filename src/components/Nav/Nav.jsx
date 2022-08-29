import React from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Nav.css';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isExpanded: false,
    };

    this.checkState = this.checkState.bind(this);
    this.hideNav = this.hideNav.bind(this);
    this.showNav = this.showNav.bind(this);
  }

  checkState() {
    this.state.isExpanded ? this.hideNav() : this.showNav();
  }

  hideNav = () => {
    if (this.state.isExpanded) {
      this.setState({
        isExpanded: false,
      });
    }
  };

  showNav = () => {
    this.setState({
      isExpanded: true,
    });
  };

  render() {
    return (
      <div>
        <Navbar
          expanded={this.state.isExpanded}
          expand="lg"
          variant="light"
          onToggle={this.checkState}
          className="container-md"
        >
          <Navbar.Brand as={NavLink} to="/" onClick={this.hideNav}>
            <Image src="/images/logos/911-backdate-gold.png" fluid />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link
                as={NavLink}
                to="/"
                onClick={this.hideNav}
                activeClassName="active"
                exact
              >
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/customization" onClick={this.hideNav}>
                Customization
              </Nav.Link>
              <Nav.Link as={NavLink} to="/colorsamples" onClick={this.hideNav}>
                Color Samples
              </Nav.Link>
              <Nav.Link as={NavLink} to="/specs" onClick={this.hideNav}>
                Specs
              </Nav.Link>
              <Nav.Link as={NavLink} to="/design" onClick={this.hideNav}>
                Design
              </Nav.Link>
              <Nav.Link as={NavLink} to="/supersport" onClick={this.hideNav}>
                Supersport
              </Nav.Link>
              <Nav.Link as={NavLink} to="/photos" onClick={this.hideNav}>
                Photos
              </Nav.Link>
              <Nav.Link as={NavLink} to="/video" onClick={this.hideNav}>
                Video
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about" onClick={this.hideNav}>
                Our Vision
              </Nav.Link>
              <Nav.Link as={NavLink} to="/contact" onClick={this.hideNav}>
                Contact
              </Nav.Link>
              <Nav.Link as={NavLink} to="/reservations" onClick={this.hideNav}>
                Reservation
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
