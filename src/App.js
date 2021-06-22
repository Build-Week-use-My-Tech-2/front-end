import "./App.css";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Owner from "./components/Owner/Owner";
import Renter from "./components/Renter/Renter";
import CreateRent from "./components/CreateRent/CreateRent";
import EditRent from "./components/EditRent/EditRent";
import RentedItems from "./components/RentedItems/RentedItems";
import Homepage from "./components/Homepage/Homepage";
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"

function App() {
	return (
		<div className="App">
			<Header />

			<Switch>
				<Route exact path="/" component={Homepage} />
				<Route exact path="/login" component={Login} />
				<Route path="/signup" component={Signup} />
				<Route path="/owner" component={Owner} />
				<Route path="/renter" component={Renter} />
				<Route path="/rentedItems" component={RentedItems} />
				<Route path="/createRent" component={CreateRent} />
				<Route path="/editRent" component={EditRent} />
			</Switch>

			<Footer />
		</div>

	

		
	);
}

export default App;
