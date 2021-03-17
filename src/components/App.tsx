import React from 'react';
import Navigation from './Navigation';
import Home from './Home';
import Body from './Body';
import Footer from './Footer';


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/">
          <Home/>
          <Body/>
          <Footer/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
