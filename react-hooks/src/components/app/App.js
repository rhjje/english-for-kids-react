import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from '../header/header';
import Home from '../home/home';
import GameField from '../game-field/game-field';
import Footer from '../footer/footer';
import FinalPageWin from '../final-page/final-page-win';
import FinalPageGameOver from '../final-page/final-page-game-over';
import Statistics from '../statistics/statistics';

import './app.scss';

const App = () => {
  const [currentPage, setCurrentPage] = useState();
  const [mistakes, setMistakes] = useState();

  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/statistics" component={Statistics} />
          <Route exact path="/final-page-game-over">
            <FinalPageGameOver mistakes={mistakes} page={currentPage} />
          </Route>
          <Route exact path="/final-page-win" component={FinalPageWin}>
            <FinalPageWin page={currentPage} />
          </Route>
          <Route path="/:id">
            <GameField
              onCountMistakes={(event) => setMistakes(event)}
              onSetPage={(event) => setCurrentPage(event)}
            />
          </Route>
          <Route exact path="/" component={Home} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
