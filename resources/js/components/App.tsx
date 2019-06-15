import * as React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Navigation from "./Navigation";
import { Events } from "./Events";
import Organizers from "./Organizers";
import Equipment from "./Equipment";
import Members from "./Members";
import Roles from "./Roles";

interface OwnProps { }

export default class App extends React.Component<OwnProps, {}> {
	render() {
		return (
			<React.Fragment>
				<Router>
					<Navigation />
					<Switch>
						<Redirect exact from='/' to='/events' />
						<Route exact path="/events" component={Events} />
						<Route exact path="/organizers" component={Organizers} />
						<Route exact path="/equipment" component={Equipment} />
						<Route exact path="/members" component={Members} />
						<Route exact path="/roles" component={Roles} />
					</Switch>
				</Router>
			</React.Fragment>
		);
	}
}