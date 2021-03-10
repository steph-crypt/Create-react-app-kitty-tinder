import React from "react";

class Timer extends React.Component {
   constructor(props) {
    super(props);
  }

  render() {
    let {seconds} = this.props
    return (
      <div id="timer">
        <h2>{seconds < 10 ? `0${seconds}` : seconds}<strong>secs</strong></h2>
      </div>
    );
  }
}

export default Timer;
