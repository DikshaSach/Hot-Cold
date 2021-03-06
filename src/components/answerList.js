import React, {Component} from 'react';
import Answer from './answer';
import './answerList.css';

class AnswerList extends Component {
  render() {
    return (
      <ul className="answerList">
        Answers Submitted:
        <br/> 
        <div className="answerListDiv">
        {this
          .props
          .numbersEntered
          .map((answer) => {
            return <Answer answer={answer} key={answer}/>
          })}
          </div>
      </ul>
    );
  }
}

export default AnswerList;
