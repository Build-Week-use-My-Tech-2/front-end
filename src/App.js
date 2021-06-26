import { Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Owner from "./components/Owner/Owner";
import Renter from "./components/Renter/Renter";
import CreateRent from "./components/CreateRent/CreateRent";
import EditRent from "./components/EditRent/EditRent";
import RentedItems from "./components/RentedItems/RentedItems";
import Homepage from "./components/Homepage/Homepage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { CssBaseline } from "@material-ui/core";
import PrivateRoute from "./utils/PrivateRoute";
import Alert from "@material-ui/lab/Alert";
import { connect } from "react-redux";

import "./App.css";

function App(props) {
	return (
		<div className="App">
			<CssBaseline />
			{props.fetchError && <Alert severity="error">{props.fetchError}</Alert>}
			<div className="app-content">
				<Header />
				<Switch>
					<Route exact path="/" component={Homepage} />
					<Route path="/login" component={Login} />
					<Route path="/signup" component={Signup} />
					<PrivateRoute path="/owner" component={Owner} />
					<PrivateRoute path="/renter" component={Renter} />
					<PrivateRoute path="/rentedItems" component={RentedItems} />
					<PrivateRoute path="/createRent" component={CreateRent} />
					<PrivateRoute path="/editRent" component={EditRent} />
				</Switch>
			</div>
			<Footer />
		</div>
	);
}

const mapStateToProps = (state) => ({
	isLoading: state.isLoading,
	fetchError: state.fetchError,
});

export default connect(mapStateToProps, {})(App);
