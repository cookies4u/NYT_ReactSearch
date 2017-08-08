// Include the Main React Dependencies
// var React = require("react");
import React from "react";

// var ReactDOM = require("react-dom");
import ReactDOM from "react-dom";

// Implementing very simple routing for single-page app.
import { BrowserRouter, Route } from "react-router-dom";


// Include the main Main Component
// var Main = require("./components/Main");
import Main from "./components/Main";

// This code here allows us to render our main component (in this case Main)
// ReactDOM.render(<Main />, document.getElementById("app"));

// Render main route.
ReactDOM.render(
	(
		<BrowserRouter>
			<Route path="/" component={Main} />
		</BrowserRouter>
	),
	document.getElementById("app")
);