import React from 'react';
import { withRouter } from 'react-router-dom';
import './statistics-buttons.scss';

class StatisticsButtons extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.history.push('/repeat-difficult-words');
  }

  render() {
    const { onClickReset } = this.props;
    return (
      <div className="statistics-buttons">
        <button type="button" className="repeat-button" onClick={this.handleClick}>Repeat difficult words</button>
        <button type="button" className="reset-button" onClick={onClickReset}>Reset</button>
      </div>
    );
  }
}

export default withRouter(StatisticsButtons);
