import * as React from "react";
import * as ReactDOM from "react-dom";
import Navigation from "./Navigation";
import Contents from "./Contents";

interface OwnProps { }

export default class App extends React.Component<OwnProps, {}> {
	render() {
		return (
			<div>
				<Navigation />
				<Contents />
			</div>
		);
	}
}