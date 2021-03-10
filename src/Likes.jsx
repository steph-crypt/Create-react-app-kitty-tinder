import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Like extends React.Component {
  constructor(props) {
    super(props);
    this.state = {cats: [], index: 0, likeArray: [], skipArray: [], dislikeArray: [], seenArray: []}
    this.handleCatsLike = this.handleCatsLike.bind(this)
    this.handleCatsSkip = this.handleCatsSkip.bind(this)
    this.handleCatsDislike = this.handleCatsDislike.bind(this)
  }

  handleCatsLike() {
    this.props.handleCats();
    this.props.sortLikes();
    this.props.sortSeen();
  }

  handleCatsSkip() {
    this.props.handleCats();
    this.props.sortSkips();
    this.props.sortSeen();
  }

   handleCatsDislike() {
    this.props.handleCats();
    this.props.sortDislikes();
    this.props.sortSeen();
  }

  render() {
    const { cats, cat, index, likeArray, skipArray, dislikeArray, seenArray, isRunning } = this.props;
    return(
      <div className="buttons">
        <button id="like" onClick={this.handleCatsLike} disabled={!isRunning}>
          <FontAwesomeIcon icon="heart" />
        </button>
        <button id="skip" onClick={this.handleCatsSkip} disabled={!isRunning}>
          <FontAwesomeIcon icon="forward" />
        </button>
        <button id="dislike" onClick={this.handleCatsDislike} disabled={!isRunning}>
          <FontAwesomeIcon icon="times" />
        </button>
      </div>
    );
  }
};

export default Like;

