import React, { Component } from 'react';
import './StyledButton.css';

export default class StyledButton extends Component {
  render() {
    return (
      <button style={this.props.styleConfig} onClick={this.props.styledButtonOnclick}>{this.props.title}</button>
    )
  }
}
