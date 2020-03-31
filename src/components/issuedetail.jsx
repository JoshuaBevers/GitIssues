import React, { Component } from "react";
import { get } from "../javascript/get";

class IssueDetail extends Component {
  state = {
    issueDetails: []
  };

  async componentDidMount() {
    const { issue_number } = this.props.match.params;
    const issueDetails = await get(
      `https://api.github.com/repos/facebook/create-react-app/issues/${issue_number}`
    );

    this.setState({
      issueDetails
    });
  }

  render() {
    const { issueDetails } = this.state;
    return (
      <div>
        {issueDetails.title}
        {issueDetails.body}
      </div>
    );
  }
}

export default IssueDetail;
