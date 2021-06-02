import React from 'react';
import './statistics-buttons.scss';

const StatisticsButtons = () => (
  <div className="statistics-buttons">
    <button type="button" className="repeat-button">Repeat difficult words</button>
    <button type="button" className="reset-button">Reset</button>
  </div>
);

export default StatisticsButtons;
