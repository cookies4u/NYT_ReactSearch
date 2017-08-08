// Include React
// var React = require("react");
import React from "react";
// helpers api
var helpers = require("../utils/helpers");
// import helpers from "../utils/helpers";


// Creating the Form component
// var Form = React.createClass({ // old
class Form extends React.Component { // new

  // Here we set a generic state associated with the text being searched for
  /*
  getInitialState() {
    return { term: "", begin_date: "", end_date: "" };
  }
  */

  constructor(props) {
    super(props);
    this.state = {
      term: "",
      begin_date: "",
      end_date: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleBeginDateChange = this.handleBeginDateChange.bind(this);
    this.handleEndDateChange = this.handleEndDateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  // This function will respond to the user input
  handleChange(event) {
    var newState = {};
    newState[event.target.id] = event.target.value;
    console.log("term: ", event.target.value);
    this.setState(newState);

    // this.setState({ term: event.target.value });
  }

  // This function will respond to the user input
  handleBeginDateChange(event) {
    
    var newState = {};
    newState[event.target.id] = event.target.value;  
    console.log("Begin Date" + event.target.value);
    this.setState(newState);

    // this.setState({ begin_date: event.target.value });
  }

  // This function will respond to the user input
  handleEndDateChange(event) {
    var newState = {};
    newState[event.target.id] = event.target.value;
    console.log("End Date: " + event.target.value);
    this.setState(newState);
    
    // this.setState({ end_date: event.target.value });
  }

  // When a user submits
  handleSubmit(event) {
    // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
    // clicking the button
    event.preventDefault();

    // Set the parent to have the search term
    console.log("state begin date ", this.state.begin_date);
    this.props.setTerm(this.state.term, this.state.begin_date, this.state.end_date);
    this.setState({ term: "", begin_date: "", end_date: "" });
  }
  // Here we describe this component's render method. this component is only for the form. The results are a different component after user hits submit
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading" id="formHeader">
          <h3 className="panel-title"><strong><i className="fa  fa-list-alt"></i> Search Parameters</strong></h3>
        </div>
        <div className="panel-body">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <h4 className="">
                Search Term:
              </h4>

              {/*
                Note how each of the form elements has an id that matches the state.
                This is not necessary but it is convenient.
                Also note how each has an onChange event associated with our handleChange event.
              */}
              <input
                value={this.state.term}
                type="text"
                className="form-control"
                id="term"
                onChange={this.handleChange}
                required
              />

              <h4 className="">
                Begin Year (YYYY):
              </h4>

              <input
                value={this.state.begin_date}
                type="text"
                className="form-control"
                id="begin_date"
                onChange={this.handleBeginDateChange}
                required
              />

              <h4 className="">
                End Year (YYYY):
              </h4>

              <input
                value={this.state.end_date}
                type="text"
                className="form-control"
                id="end_date"
                onChange={this.handleEndDateChange}
                required
              />
              <br />
              <button
                className="btn btn-primary"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
//});
}

// Export the component back for use in other files
// module.exports = Form; // old
export default Form; // new
