import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <h1 className="Header">
        {this.props.header}
      </h1>
    );
  }
}

export default Header;
