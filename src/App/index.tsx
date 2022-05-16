import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AppLayout } from 'layouts/AppLayout';
import { Home } from 'pages/Home';
import { GameField } from 'pages/GameField';
import { FinalPage } from 'pages/FinalPage';
import { Statistics } from 'pages/Statistics';
import { setLocalStorage } from 'utils/setLocalStorage';
import { Nullable } from 'types/types';
import './App.scss';

export const App = () => {
  const [mistakes, setMistakes] = useState<Nullable<number>>(null);

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
            <FinalPage mistakes={mistakes} />
          </Route>
          <Route path="/:id">
            <GameField onCountMistakes={setMistakes} />
          </Route>
          <Route exact path="/" component={Home} />
        </Switch>
      </AppLayout>
    </Router>
  );
};
