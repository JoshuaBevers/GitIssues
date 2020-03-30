import React, { Component } from "react";
import Issue from "./issue";

class IssueList extends Component {
  state = {};

  async componentDidMount() {
    try {
      const response = await fetch(
        `https://api.github.com/repos/facebook/create-react-app/issues`
      );
      console.log(response);
    } catch (e) {
      return e;
    }
  }
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
