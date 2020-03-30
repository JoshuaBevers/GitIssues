import React from "react";

const Issue = props => {
  const { gitIssue } = props;
  console.log("the url is", gitIssue);
  return <div>the issue is: {}</div>;
};

export default Issue;
