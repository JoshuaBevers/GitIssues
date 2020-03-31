import React from "react";

const Issue = props => {
  const { gitIssue } = props;
  if (gitIssue !== undefined) {
    return (
      <div>
        the issue: "{gitIssue.title}" is:
        <a href={gitIssue.url}>{gitIssue.url}</a>
        <p>{gitIssue.body}</p>
      </div>
    );
  } else {
    return null;
  }
};

export default Issue;
