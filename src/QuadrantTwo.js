import React, { Component } from 'react';
import './QuadrantTwo.css';
import Header from './Header';
import expertise from './expertise.json';
import Skill from './Skill';

class QuadrantTwo extends Component {
  constructor() {
    super();
    this.state = {
      skills: expertise.skills,
      showFundamentals: true,
      showFrontend: true,
      showDesign: true,
      showBackend: true,
      showDatabase: true,
      showMisc: true
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if(e.target.name === "fundamentals") {
      this.setState({
        showFundamentals: true,
        showFrontend: false,
        showDesign: false,
        showBackend: false,
        showDatabase: false,
        showMisc: false
      });
    } else if(e.target.name === "frontend") {
      this.setState({
        showFundamentals: false,
        showFrontend: true,
        showDesign: false,
        showBackend: false,
        showDatabase: false,
        showMisc: false
      });
    } else if(e.target.name === "design") {
      this.setState({
        showFundamentals: false,
        showFrontend: false,
        showDesign: true,
        showBackend: false,
        showDatabase: false,
        showMisc: false
      });
    } else if(e.target.name === "backend") {
      this.setState({
        showFundamentals: false,
        showFrontend: false,
        showDesign: false,
        showBackend: true,
        showDatabase: false,
        showMisc: false
      });
    } else if(e.target.name === "database") {
      this.setState({
        showFundamentals: false,
        showFrontend: false,
        showDesign: false,
        showBackend: false,
        showDatabase: true,
        showMisc: false
      });
    } else if(e.target.name === "misc") {
      this.setState({
        showFundamentals: false,
        showFrontend: false,
        showDesign: false,
        showBackend: false,
        showDatabase: false,
        showMisc: true
      });
    } else if(e.target.name === "all") {
      this.setState({
        showFundamentals: true,
        showFrontend: true,
        showDesign: true,
        showBackend: true,
        showDatabase: true,
        showMisc: true
      });
    }
  }

  render() {
    return (
      <div className="QuadrantTwo quad">
        <Header header={this.props.header} />

        <button className="btn btn-default" name="fundamentals" onClick={this.handleClick}>Fundamentals</button>
        <button className="btn btn-default" name="frontend" onClick={this.handleClick}>Front-end</button>
        <button className="btn btn-default" name="design" onClick={this.handleClick}>Design</button>
        <button className="btn btn-default" name="backend" onClick={this.handleClick}>Back-end</button>
        <button className="btn btn-default" name="database" onClick={this.handleClick}>Database</button>
        <button className="btn btn-default" name="misc" onClick={this.handleClick}>Miscellaneous</button>
        <button className="btn btn-default" name="all" onClick={this.handleClick}>Show All</button>

        {
          this.state.skills
            .filter((i) =>
              (i.category === "Fundamentals" && this.state.showFundamentals) ||
              (i.category === "Front-end" && this.state.showFrontend) ||
              (i.category === "Design" && this.state.showDesign) ||
              (i.category === "Back-end" && this.state.showBackend) ||
              (i.category === "Database" && this.state.showDatabase) ||
              (i.category === "Miscellaneous" && this.state.showMisc)
            )
            .map((i) =>
              <Skill key={i.skill} skill={i.skill} version={i.version} category={i.category} starred={i.starred} />
            )
        }
      </div>
    );
  }
}

export default QuadrantTwo;
