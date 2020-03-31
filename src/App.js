import React from "react";
import IssueList from "./components/issueList";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import IssueDetail from "./components/issuedetail";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>FrontBack</h1>
        <Router>
          <div>
            <Route path="/" exact component={IssueList} />
            <Route path="/issue/:issue_number?" component={IssueDetail} />
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
