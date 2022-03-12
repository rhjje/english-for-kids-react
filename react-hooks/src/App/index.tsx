import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AppLayout } from 'layouts/AppLayout';
import { Home } from 'pages/Home';
import { GameField } from 'pages/GameField';
import { FinalPage } from 'pages/FinalPage';
import { Statistics } from 'pages/Statistics';
import { setLocalStorage } from 'utils/setLocalStorage';
import './App.scss';

export const App = () => {
  const [currentPage, setCurrentPage] = useState(null);
  const [mistakes, setMistakes] = useState(null);

  useEffect(() => {
    if (!localStorage.getItem('data')) {
      setLocalStorage();
    }
  }, []);

  return (
    <Router>
      <AppLayout>
        <Switch>
          <Route path="/statistics" component={Statistics} />
          <Route path="/final-page">
            <FinalPage page={currentPage} mistakes={mistakes} />
          </Route>
          <Route path="/:id">
            <GameField
              onCountMistakes={setMistakes}
              onSetPage={setCurrentPage}
            />
          </Route>
          <Route exact path="/" component={Home} />
        </Switch>
      </AppLayout>
    </Router>
  );
};
