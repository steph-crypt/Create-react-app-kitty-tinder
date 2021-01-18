import React from "react";

class Timer extends React.Component {
   constructor(props) {
    super(props);
  }

  render() {
    let {seconds} = this.props
    return (
      <div id="timer">
        <h2>{this.props.seconds < 10 ? `0${this.props.seconds}` : this.props.seconds}<strong>secs</strong></h2>
      </div>
    );
  }
}

export default Timer;
