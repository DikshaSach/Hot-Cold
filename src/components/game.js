import React, {Component} from 'react';
import Header from './header';
import GameForm from './gameform';
import AnswerList from './answerList';
import HotCold from './hotcold';
import './game.css';

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOver: false,
            numbersEntered: [],
            value: null,
            randomNumber: Math.floor(Math.random() * (100 - 0) + 0),
            counter: 0
        };
        this.onNewRandomNumber = this
            .onNewRandomNumber
            .bind(this);
    }

    onNewRandomNumber() {
        const random = Math.floor(Math.random() * (100 - 0) + 0);
        this.setState({randomNumber: random, numbersEntered: [], value: null, counter: 0})
    }
    updateCounter = counter => {
        this.setState({counter: counter})
    }

    currentValue = value => {
        this.setState({value})

    }

    submit = value => {
        this.setState({
            numbersEntered: [
                ...this.state.numbersEntered,
                value
            ],
            counter: this.state.counter + 1
        });
    }

    render() {

        return (
            <div className="gamepage">
                <Header triggerNewNumber={this.onNewRandomNumber}/>
                <h1 className="title">HOT or COLD</h1>
                <div className="main-game-container">
                    <HotCold
                        triggerNewNumber={this.onNewRandomNumber}
                        handler={this.state.isOver}
                        guess={this.state.value}
                        randomNumber={this.state.randomNumber}/>

                    <GameForm
                        numbersEntered={this.state.numbersEntered}
                        submit={numbersEntered => this.submit(numbersEntered)}
                        currentValue={value => this.currentValue(value)}
                        updateCounter={counter => this.updateCounter(counter)}/>
                    <p>Guess#: {this.state.counter}</p>
                    <AnswerList numbersEntered={this.state.numbersEntered}/>

                </div>

            </div>
        );
    }
}

export default Game;
