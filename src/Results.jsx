import React from "react";

class Results extends React.Component {

  render() {
    const { cats, likeArray, dislikeArray, skipArray, seenArray } = this.props;
    return(
        <div className="like-results">
          <h1>Your Results</h1>
           <br></br>
            <h2>Total Cats Seen: <span>{seenArray.length}</span></h2>
            <h2>Likes: <span>{likeArray.length}</span></h2>
            <h2>Dislikes: <span>{dislikeArray.length}</span></h2>
            <h2>Skips: <span>{skipArray.length}</span></h2>
      </div>
    );
  }
}

export default Results;

