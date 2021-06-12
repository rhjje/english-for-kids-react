import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from '../header/header';
import Home from '../home/home';
import GameField from '../game-field/game-field';
import Footer from '../footer/footer';
import FinalPageWin from '../final-page/final-page-win';
import FinalPageGameOver from '../final-page/final-page-game-over';
import Statistics from '../statistics/statistics';

import './app.scss';

const App = () => (
  <>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/statistics" component={Statistics} />
        <Route exact path="/final-page-game-over" component={FinalPageGameOver} />
        <Route exact path="/final-page-win" component={FinalPageWin} />
        <Route path="/:id" component={GameField} />
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer />
    </Router>
  </>
);

export default App;