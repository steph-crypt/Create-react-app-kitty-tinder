import React from "react";

class PlayAgain extends React.Component {
  constructor(props) {
    super(props);
    this.handlePlayAgain = this.handlePlayAgain.bind(this);
  }

  handlePlayAgain() {
    this.props.resetTimer()
    this.props.setTimer()
    this.props.resetArrays()
    this.props.resetCats()
  };

  render() {
    return (
      <button id="play-again" onClick={this.handlePlayAgain}>Play Again</button>
    );
  }
}

export default PlayAgain;
