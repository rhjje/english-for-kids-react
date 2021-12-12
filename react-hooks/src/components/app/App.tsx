import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from '../header/header';
import Home from '../home/home';
import GameField from '../game-field/game-field';
import Footer from '../footer/footer';
import FinalPageWin from '../final-page/final-page-win';
import FinalPageGameOver from '../final-page/final-page-game-over';
import Statistics, { setLocalStorage } from '../statistics/statistics';

import './app.scss';

const App = () => {
  const [currentPage, setCurrentPage] = useState(null);
  const [mistakes, setMistakes] = useState(null);

  useEffect(() => {
    if (!localStorage.getItem('data')) {
      setLocalStorage();
    }
  }, []);

  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/statistics" component={Statistics} />
          <Route path="/final-page-game-over">
            <FinalPageGameOver mistakes={mistakes} page={currentPage} />
          </Route>
          <Route path="/final-page-win" component={FinalPageWin}>
            <FinalPageWin page={currentPage} />
          </Route>
          <Route path="/:id">
            <GameField onCountMistakes={setMistakes} onSetPage={setCurrentPage} />
          </Route>
          <Route exact path="/" component={Home} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
