import React, {Component} from 'react';
import what from './images/what.png';

import playagain from './images/playagain.png'
import './header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
    this.toggleDiv = this
      .toggleDiv
      .bind(this)
  }
  toggleDiv = () => {
    const {show} = this.state;
    this.setState({
      show: !show
    })

  }

  render() {
    const {show} = this.state;
    return (
      <nav className="gamenav">
        <input
          className="information"
          type="image"
          src={what}
          onClick={this.toggleDiv}/> {this.state.show
          ? <div className="box">
              <h1>How To Play:</h1>
              <p>1. I am going to pick a random secret number between 0-100
                <br/>
                2. You need to guess until you can find the secret number
                <br/>
                3. You will get feedback on how close ("hot") or far ("cold") your guess is.
              </p>
              <button onClick={this.toggleDiv}>close</button>
            </div>
          : null
          }
        <input
          className="playagain"
          type="image"
          src={playagain}
          onClick={this.props.triggerNewNumber}/>
      </nav>
    );
  }

}

export default Header;
