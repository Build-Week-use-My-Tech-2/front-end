import React, { useState } from "react";
import { connect } from "react-redux";
import { login, clearError } from "../../actions";

//
import { Link, useHistory } from "react-router-dom";
import {
	Typography,
	Button,
	TextField,
	InputAdornment,
} from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";

const initialLoginCredentials = {
	username: "",
	password: "",
};

const Login = (props) => {
	// const { isLoading, isLoggedIn, login, clearError } = props;
	const { login } = props;
	const [loginCredentials, setLoginCredentials] = useState(
		initialLoginCredentials,
	);

	const handleChange = (e) => {
		setLoginCredentials({
			...loginCredentials,
			[e.target.name]: e.target.value,
		});
	};

	// const history = useHistory();
	const ownerSubmit = (e) => {
		login(loginCredentials);
	};
	const renterSubmit = (e) => {
		login(loginCredentials);
	};

	return (
		<div>
			<Typography variant="h4">Login Form</Typography>

			<form>
				<TextField
					type="text"
					name="username"
					value={loginCredentials.username}
					placeholder="enter your username"
					onChange={handleChange}
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">
								<AccountCircle />
							</InputAdornment>
						),
					}}
				/>
				<TextField
					type="text"
					name="password"
					value={loginCredentials.password}
					placeholder="enter your password"
					onChange={handleChange}
				/>

				<Button variant="outlined" size="small" onClick={ownerSubmit}>
					Owner
				</Button>
				<Button variant="outlined" size="small" onClick={renterSubmit}>
					Renter
				</Button>
			</form>
			<div>
				<Typography variant="subtitle1">dont have an account?</Typography>

				<Link to="/signup">sign up</Link>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	isLoading: state.isLoading,
	isLoggedIn: state.isLoggedIn,
	user: state.user,
	owner: state.owner,
	renter: state.renter,
});

export default connect(mapStateToProps, { login, clearError })(Login);
