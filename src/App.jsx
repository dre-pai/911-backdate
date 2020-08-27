import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Navigation from './components/Nav/Nav';
import Routes from './components/Routes/Routes';
import Footer from './components/Footer/Footer';

class App extends React.Component {
  constructor() {
    super();
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  render() {
    return (
      <Container>
        <Navigation />
        <div className="page-content">
          <Routes />
        </div>
        <Footer />
      </Container>
    );
  }
}

export default App;
