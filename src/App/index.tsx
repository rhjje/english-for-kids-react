import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AppLayout } from 'layouts/AppLayout';
import { Home } from 'pages/Home';
import { GameField } from 'pages/GameField';
import { FinalPage } from 'pages/FinalPage';
import { Statistics } from 'pages/Statistics';
import { StorageKeys } from 'utils/constants';
import { setLocalStorage } from 'utils/setLocalStorage';
import './App.scss';

export const App = () => {
  useEffect(() => {
    if (!localStorage.getItem(StorageKeys.Data)) {
      setLocalStorage();
    }
  }, []);

  return (
    <Router>
      <AppLayout>
        <Switch>
          <Route path="/statistics" component={Statistics} />
          <Route path="/final-page">
            <FinalPage />
          </Route>
          <Route path="/:id">
            <GameField />
          </Route>
          <Route exact path="/" component={Home} />
        </Switch>
      </AppLayout>
    </Router>
  );
};
