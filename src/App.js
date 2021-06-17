import "./App.css";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";

function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/" component={Login} />
				<Route path="/signup" component={Signup} />
			</Switch>
		</div>
	);
}

export default App;
