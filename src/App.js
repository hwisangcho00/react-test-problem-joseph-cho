import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Adding a state that toggles on and off
      isClicked : false
    };

    // Binding for callbakcs
    this.buttonClick = this.buttonClick.bind(this)

  }

  //handler goes here

  buttonClick() {
    this.setState(prevState => ({
      isClicked : !prevState.isClicked // Flip the boolean value
    }));
  }

  /**
   * 
   * @returns Single button with a functionality to toggle on and off.
   * Text changes accordingly to the state of the button
   */
  render() {
    return (
      <div>
        <button onClick =  {this.buttonClick}> 
          {this.state.isClicked ? 'thanks' : 'click me'}
        </button>
      </div>
    );
  }
}