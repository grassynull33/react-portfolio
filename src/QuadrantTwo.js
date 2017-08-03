import React, { Component } from 'react';
import './QuadrantTwo.css';
import Header from './Header';
import expertise from './expertise.json';
import Skill from './Skill';

class QuadrantTwo extends Component {
  constructor() {
    super();
    this.state = {
      skills: expertise.skills
    };
  }

  render() {
    return (
      <div className="QuadrantTwo quad">
        <Header header={this.props.header} />
        {this.state.skills.map((i) =>
          <Skill key={i.skill} skill={i.skill} version={i.version} category={i.category} starred={i.starred} />
        )}
      </div>
    );
  }
}

export default QuadrantTwo;
