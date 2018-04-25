import React, {Component} from 'react';
import './hotcold.css';
import Winner from './images/winner.gif';

class HotCold extends Component {

    render() {
        const guess = (this.props.guess);
        const actual = (this.props.randomNumber);
        if (guess === actual) {
            return (
                <div className="hotcold-container">
                <div className="gameOver">
                <h1>You won!</h1>
                <img className="trophy" alt="tropy" src={Winner} />
                <br />
                <button onClick={this.props.triggerNewNumber}>PLAY AGAIN!</button>
                </div>
                
                </div>
            );
        } else if (guess > (actual - 5) && guess < (actual + 5)) {
            return (
                <div className="hotcold-actual-5">So Hot!!!</div>
            );
        } else if (guess > (actual - 10) && guess < (actual + 10)) {
            return (
                <div className="hotcold-actual-10">Kind Of Hot!</div>
            );
        } else {
            return (
                <div className="hotcold-not-actual">Cold</div>
            );
        }
    }
}

export default HotCold;