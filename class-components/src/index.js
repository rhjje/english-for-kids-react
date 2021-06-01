import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import { setLocalStorage } from './components/statistics/statistics'; 

if (!localStorage.getItem('data')) {
  setLocalStorage();
}

ReactDOM.render(<App />, document.getElementById('root'));
