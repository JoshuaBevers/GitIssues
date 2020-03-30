import React, { Component } from "react";
import Issue from "./issue";

class IssueList extends Component {
  state = {
    Issues: []
  };

  async componentDidMount() {
    try {
      const response = await fetch(
        `https://api.github.com/repos/facebook/create-react-app/issues`
      );
      const Data = await response.json();
      this.setState({ Issues: Data });
    } catch (e) {
      return e;
    }
  }
  render() {
    return (
      <div className="tempname">
        <div>
          <p>You question my life choices.</p>
          {this.state.Issues.length > 0 ? (
            this.state.Issues.map(issue => {
              return (
                <div key={issue.id}>
                  <li>
                    <Issue gitIssue={issue} />
                  </li>
                </div>
              );
            })
          ) : (
            <p>this didnt' render</p>
          )}
          <Issue />
        </div>
      </div>
    );
  }
}

export default IssueList;
