// Include React
var React = require("react");
// helpers api
var helpers = require("../utils/helpers");

// Creating the Results component
var Results = React.createClass({
  //article info prop from main related to returned results
  handleSaveResult: function() {
    event.preventDefault();
    helpers.postSaved(this.props.articleInfo).then(function(response) {
      console.log("Response=================");
      console.log(this.props);
      this.props.removeResult(this.props.articleInfo.url)
    }.bind(this))
  },

  handleDeleteResult: function() {
    event.preventDefault();
      this.props.removeResult(this.props.articleInfo.url)
  },

  render: function() {
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
});

// Export the component back for use in other files
module.exports = Results;
