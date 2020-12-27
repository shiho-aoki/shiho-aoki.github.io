import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from './auth';

import Home from "./screens/Home";
import Aboute from "./screens/About";
import Work from "./screens/Work";
import BlotTop from "./screens/Blog-top";
import Contact from "./screens/Contact";

import '../static/App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* do not need auth */}
          <Route exact path="/" component={ Home }/>
          <Route exact path="/aboute" component={ Aboute }/>
          <Route exact path="/work" component={ Work }/>
          <Route exact path="/blog" component={ BlotTop }/>
          <Route exact path="/contact" component={ Contact }/>
          {/* need auth */}
          
          <Auth>
            <Switch>
              {/* <Route exact path="/siginout" component={ SingOut }/>
              <Route exact path="/contact_is" component={ Contact }/> */}
              <Route exact path={ ()=> <p> not found. </p> }/>
            </Switch>
          </Auth>

        </Switch>
      </Router>
    );
  }
}

export default App;