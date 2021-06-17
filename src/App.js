import "./App.css";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Owner from "./components/Owner/Owner";
import Renter from "./components/Renter/Renter";
import CreateRent from "./components/CreateRent/CreateRent";
import EditRent from "./components/EditRent/EditRent";

function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/" component={Login} />
				<Route path="/signup" component={Signup} />
				<Route path="/owner" component={Owner} />
				<Route path="/renter" component={Renter} />
				<Route path="/createRent" component={CreateRent} />
				<Route path="/editRent" component={EditRent} />
			</Switch>
		</div>
	);
}

export default App;
