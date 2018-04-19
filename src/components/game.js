import React, { Component } from 'react';
import Header from './header';
import GameForm from './gameform';
import AnswerList from './answerList';
import HotCold from './hotcold';
import './game.css';


class Game extends Component {
    constructor(props){
        super(props);
        this.state = {
            numbersEntered: [],
           value: 0,
            randomNumber: Math.floor(Math.random() * (100 - 0) + 0)
            
        };
        this.onNewRandomNumber = this.onNewRandomNumber.bind(this);
    }
    
    onNewRandomNumber(){  
        const random = Math.floor(Math.random() * (100 - 0) + 0);
        
        this.setState({
            randomNumber: random,
            numbersEntered: [],
            value: 0
        })
        console.log(this.state.numbersEntered);
    }   

    currentValue = value =>{
        this.setState({value})
    }
  
    submit = numbersEntered =>{
        this.setState({numbersEntered});
        console.log('Game has your values entered which are:', numbersEntered);
    }
  render() {
      
    return (
      <div className="gamepage">
        <Header triggerNewNumber={this.onNewRandomNumber}/>
        <div className="main-game-container">
        <HotCold {...this.state} />
        <GameForm submit={numbersEntered =>this.submit(numbersEntered)} currentValue={value => this.currentValue(value)}/>
       
        <AnswerList {...this.state} />
        
</div>
        
      </div>
    );
  }
}

export default Game;
