import React from "react";

class Play extends React.Component {
  constructor(props) {
    super(props);
    this.handlePlayClick = this.handlePlayClick.bind(this);
  }

  handlePlayClick() {
    this.props.handlePlay()
    this.props.setTimer()
  }

  render() {
    return (
      <button id="play-button" onClick={this.handlePlayClick} disabled={this.props.isRunning}>Play</button>
    );
  }
}

export default Play;

