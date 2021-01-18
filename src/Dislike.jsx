import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Dislike extends React.Component {
  constructor(props) {
    super(props);
    this.state = {cats: [], index: 0, dislikeArray: [], seenArray: []}
    this.handleCatsClick = this.handleCatsClick.bind(this)
  }

  handleCatsClick() {
    this.props.handleCats();
    this.props.sortDislikes();
    this.props.sortSeen();
  }

  render() {
    const { cats, cat, index, dislikeArray, seenArray, isRunning } = this.props;
    return(
       <div className="buttons">
        <button id="dislike" onClick={this.handleCatsClick} disabled={!this.props.isRunning}>
          <FontAwesomeIcon icon="times" />
        </button>
      </div>
    );
  }
}

export default Dislike;
