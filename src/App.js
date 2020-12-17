import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import TopBar from './component/comp_top_bar';
import UnderBar from './component/comp_under_bar';
import Top from './component/Top';
import About from './component/About';
import Work from './component/Work';
import Blog from './component/Blog';
import Contact from './component/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <TopBar />
        <UnderBar />

        <Switch>
          <Route path="/">
            <Top />
          </Route>

          <Route path="/aboute">
            <About />
          </Route>

          <Route path="/work">
            <Work />
          </Route>

          <Route path="/blog">
            <Blog />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;