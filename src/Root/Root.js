import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { GlobalStyle } from '../globalStyle';
import Home from '../Home/Home';
import Header from '../shared/Header/Header';
import Section from '../shared/Section/Section';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header  />
      <Switch>
        <Route to="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}
export default App;
