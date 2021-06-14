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

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mistakes: null,
      page: null
    };

    this.onCountMistakes = this.onCountMistakes.bind(this);
    this.onSetPage = this.onSetPage.bind(this);
  }

  onCountMistakes(number) {
    this.setState({
      mistakes: number
    });
  }

  onSetPage(url) {
    this.setState({
      page: url
    });
  }

  render() {
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/statistics" component={Statistics} />
            <Route exact path="/final-page-game-over">
              <FinalPageGameOver
                mistakes={this.state.mistakes}
                page={this.state.page}
              />
            </Route>
            <Route exact path="/final-page-win" component={FinalPageWin}>
              <FinalPageWin page={this.state.page} />
            </Route>
            <Route path="/:id">
              <GameField
                onCountMistakes={this.onCountMistakes}
                onSetPage={this.onSetPage}
              />
            </Route>
            <Route exact path="/" component={Home} />
          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}
