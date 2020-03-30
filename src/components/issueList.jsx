import React, { Component } from "react";
import Issue from "./issue";

class IssueList extends Component {
  state = {};

  render() {
    return (
      <div className="MemoryCard" onClick={this.props.pickCard}>
        <div>
          <p>You question my life choices.</p>
          <Issue />
        </div>
      </div>
    );
  }
}

export default IssueList;
