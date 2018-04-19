import React, { Component } from 'react';



class Header extends Component {   
  render() {

    return (
      <nav className="gamenav">
        <button onClick={this.props.triggerNewNumber}>Get New Number</button>
      </nav>
    );
  }
}

export default Header;
