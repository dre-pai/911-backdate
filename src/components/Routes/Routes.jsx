import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import About from '../About/About';
import Process from '../Process/Process';
import Contact from '../Contact/Contact';
import Photos from '../Photos/Photos';
import Video from '../Video/Video';
import Reservations from '../Reservations/Reservations';
import ColorSamples from '../ColorSamples/ColorSamples';
import Engine from '../Engine/Engine';
import Design from '../Design/Design';
import Specs from '../Specs/Specs';
import Supersport from '../Supersport/Supersport';

export default class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/customization" component={Process} />
        <Route path="/colorsamples" component={ColorSamples} />
        <Route path="/photos" component={Photos} />
        <Route path="/video" component={Video} />
        <Route path="/engine" component={Engine} />
        <Route path="/design" component={Design} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/specs" component={Specs} />
        <Route path="/reservations" component={Reservations} />
        <Route path="/supersport" component={Supersport} />
      </Switch>
    );
  }
}
