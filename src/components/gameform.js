import React, { Component } from 'react';
import './gameform.css';

class GameForm extends Component {
    constructor(props){
        super(props);
        this.state =
            {
            value: '',
            lastGuess: 0,
            answersEntered: []
        };
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }

        handleChange(event){
            this.setState({value: event.target.value});
           
        }
        handleSubmit(event){
            event.preventDefault();
            const {answersEntered} = this.state;
            const newValue = Number(this.refs.number.value);
            this.setState({
                answersEntered: [...answersEntered, newValue],
                value: ''
            }, ()=>{ 
                   this.props.submit(this.state.answersEntered);
                    this.props.currentValue(newValue)
                   }
                
            );
            
        }
    
    
  render() {
      
    return (
        <form className="gameForm">
            <label>
                Enter A Number:
                <br />
                <input className="gameForm-input" type="number" ref="number" name="number" value={this.state.value} onChange={this.handleChange} placeholder='Type a number'/>
            </label>
                <br />
                <button className="gameForm-bttn" onClick={(event) => this.handleSubmit(event)}>Submit</button>
                
        </form>
    );
  }
}

export default GameForm;
