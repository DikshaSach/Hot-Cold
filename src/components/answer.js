import React, { Component } from 'react';
import './answer.css';
class Answer extends Component {
  render() {
    return (
        
      <li className="answer">
        <div className="answer-div">
        {this.props.answer}
            </div>
        </li>
        
    );
  }
}

export default Answer;