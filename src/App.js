import React from 'react';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import { Route, Link, Switch } from 'react-router-dom';

const HATSPAGE = () => (
  <div>
    <h1>HATS</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop/hats" component={HATSPAGE} />
      </Switch>
    </div>
  );
}

export default App;
