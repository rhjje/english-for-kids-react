import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from '../header/header';
import Home from '../home/home';
import GameField from '../game-field/game-field';
import Footer from '../footer/footer';

import './app.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
          <Switch>
            <Route path="/:id" component={GameField}/>
            <Route exact path="/" component={Home}/>
          </Switch>
          <Footer/>
      </Router>
    </div>
  );
}

export default App;
