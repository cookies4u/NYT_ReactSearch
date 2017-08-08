// Include React
// var React = require("react");
import React from "react";
// helpers api
var helpers = require("../utils/helpers");
// import helpers from "../utils/helpers";

// Creating the Results component
// var Results = React.createClass({ // old
class Results extends React.Component { // new
  constructor(props) {
    super(props);
    this.handleSaveResult= this.handleSaveResult.bind(this);
    this.handleDeleteResult = this.handleDeleteResult.bind(this);
  }


  //article info prop from main related to returned results
  handleSaveResult() {
    console.log("1xxx");
    event.preventDefault();
    console.log("1xxx");
    helpers.postSaved(this.props.articleInfo).then(function(response) {
      console.log("Response=================");
      console.log("prop after response ", this.props);
      this.props.removeResult(this.props.articleInfo.url)
    }.bind(this));
  }

  handleDeleteResult() {
    event.preventDefault();
    this.props.removeResult(this.props.articleInfo.url)
  }

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading" id="resultHeader">
          <button onClick={this.handleSaveResult} className="btn btn-default btn-xs pull-right">Save</button>
           &nbsp; &nbsp;
           <a target="_blank" href={this.props.articleInfo.url}>{this.props.articleInfo.title}</a>
           &nbsp;•&nbsp; {this.props.articleInfo.pub_date.substring(0,10)}
      </div>
        <div className="panel-body">
          <p>{this.props.articleInfo.snippet}</p>
        </div>
      </div>
    )
  }
// });
}

// Export the component back for use in other files
// module.exports = Results; // old
export default Results; // new
