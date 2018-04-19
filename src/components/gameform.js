import React, { Component } from 'react';
import './gameform.css';

class GameForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: '',
            answersEntered: props.numbersEntered
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps);
        this.setState({
            value:'',
            answersEntered:nextProps.numbersEntered
        })
    }

    handleChange(event){
        this.setState({value: event.target.value}); 
    }

    handleSubmit(){
        const {answersEntered} = this.state;
        const newValue = Number(this.refs.number.value);
        const inArray = answersEntered.includes(newValue)
        if(inArray){
            alert('Number already exists');

        }else if(newValue < 0 || newValue > 100){
            alert('value not in range');
        } else {
            this.setState({
                value: ''
            }, ()=>{ 
                this.props.submit(newValue);
                    this.props.currentValue(newValue); 
                }
            );
        } 
    }
        
   handleClick(event){
        event.preventDefault();
       this.handleSubmit();
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
                <button className="gameForm-bttn" onClick={(event) => this.handleClick(event)}>Submit</button>
                
        </form>
    );
  }
}

export default GameForm;
