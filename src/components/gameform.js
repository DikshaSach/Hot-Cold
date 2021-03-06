import React, {Component} from 'react';
import './gameform.css';

class GameForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            answersEntered: props.numbersEntered
        };
        this.handleChange = this
            .handleChange
            .bind(this);
        this.handleSubmit = this
            .handleSubmit
            .bind(this);
    }

    componentsWillReceiveProps(nextProps) {
        console.log(nextProps);
        this.setState({value: '', answersEntered: nextProps.numbersEntered})
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    handleSubmit() {
        const {answersEntered} = this.state.answersEntered;
        const newValue = Number(this.refs.number.value);
        const inArray = this.props.numbersEntered.includes(newValue)
        if (inArray) {
            alert('Number already exists')
        } else {
            if (newValue < 0 || newValue > 100) {
                alert('value not in range');
            } else {
                this.setState({
                    value: ''
                }, () => {
                    this
                        .props
                        .submit(newValue);
                    this
                        .props
                        .currentValue(newValue);
                });
            }
        }
        
    }
    handleSubmitClick(event) {
        event.preventDefault();
        this.handleSubmit();
    }

    render() {

        return (
            <form className="gameForm" onSubmit={(event) => this.handleSubmitClick(event)}>
                <input
                    className="gameForm-input"
                    type="number"
                    ref="number"
                    name="number"
                    value={this.state.value}
                    onChange={this.handleChange}
                    placeholder='Guess a number 0-100'/>
                <br/>
                <button className="gameForm-bttn">Guess</button>

            </form>
        );
    }
}

export default GameForm;
