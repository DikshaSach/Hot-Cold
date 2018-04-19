import React, { Component } from 'react';
import './hotcold.css';


class HotCold extends Component {   
     
  render() {
      const guess = (this.props.value);
      console.log(this.props);
     const actual = (this.props.randomNumber);
      if(guess === actual){
            return(
                <div className="hotcold-answer">You got the answer!</div>
            );
          }
       else if(guess > (actual-5) && guess < (actual+5)){
         return(
              <div className="hotcold-answer">So Hot!!!</div>
             );     
        }
      else if(guess > (actual-10) && guess < (actual+10)){
          return(
              <div className="hotcold-answer">Kind Of Hot!</div>
          );
        }

    else{
        return(
                <div className="hotcold-answer">Cold</div>
            ); 
    }
  }
}

export default HotCold;