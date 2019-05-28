import * as React from "react";
import * as ReactDOM from "react-dom";

export default class App extends React.Component<{}, {}> {
	render() {
		return <div>Hello from Tsx</div>;
	}
}

if (document.getElementById('react-app')) {
	ReactDOM.render(<App />, document.getElementById('react-app'));
}