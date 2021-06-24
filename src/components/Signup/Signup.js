import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { signup, clearError } from "../../actions";
import axios from "axios";

//
import { Link } from "react-router-dom";
import {
	Typography,
	TextField,
	Button,
	InputAdornment,
} from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";

const initialFormValues = {
	username: "",
	password: "",
};

const Signup = (props) => {
	// const { isLoading, isLoggedIn, login, clearError } = props;
	const { signup } = props;
	const [signupCredentials, setSignupCredentials] = useState(initialFormValues);

	const handleChange = (e) => {
		setSignupCredentials({
			...signupCredentials,
			[e.target.name]: e.target.value,
		});
	};

	const ownerSubmit = (e) => {
		signup(signupCredentials);
	};
	const renterSubmit = (e) => {
		signup(signupCredentials);
	};

	return (
		<div>
			<Typography variant="h4">Sign Up!</Typography>
			<form>
				<TextField
					type="text"
					name="username"
					value={signupCredentials.username}
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
					value={signupCredentials.password}
					placeholder="enter your password"
					onChange={handleChange}
				/>
				<Button variant="outlined" onClick={ownerSubmit}>
					Im an owner
				</Button>
				<Button variant="outlined" onClick={renterSubmit}>
					Im a renter
				</Button>

				<div>
					<Typography variant="subtitle1">already have an account?</Typography>

					<Link to="/login">log in</Link>
				</div>
			</form>
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

export default connect(mapStateToProps, { signup, clearError })(Signup);
