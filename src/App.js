import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useRouteMatch,
  useHistory,
} from 'react-router-dom';

import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';

import './App.css';

const App = () => {
  return (
    <div>
      <nav>
        <div>
          <Link className="link" to="/">
            home
          </Link>

          <Link className="link" to="/projects">
            projects
          </Link>

          <Link className="link" to="/contact">
            contact
          </Link>
        </div>
      </nav>

      <Switch>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <div></div>
    </div>
  );
};

export default App;
