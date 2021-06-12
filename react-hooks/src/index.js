import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import { setLocalStorage } from './components/statistics/statistics';
import images from './assets/JSON/images.json';

document.addEventListener('DOMContentLoaded', () => {
  images.forEach((url) => {
    const img = new Image();
    img.src = url;
  });
});

if (!localStorage.getItem('data')) {
  setLocalStorage();
}

ReactDOM.render(<App />, document.getElementById('root'));
