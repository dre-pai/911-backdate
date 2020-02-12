import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Navigation from './components/Nav/Nav';
import Routes from './components/Routes/Routes';
import Footer from './components/Footer/Footer';

class App extends React.Component {
  render() {
    return (
      <Container>
        <Navigation />
        <Routes />
        <Footer />
      </Container>
    );
  }
}

export default App;
