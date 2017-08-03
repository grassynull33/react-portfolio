import React, { Component } from 'react';
import './QuadrantFour.css';
import Header from './Header';

class QuadrantFour extends Component {
  render() {
    return (
      <div className="QuadrantFour quad">
        <Header header={this.props.header} />
      </div>
    );
  }
}

export default QuadrantFour;
