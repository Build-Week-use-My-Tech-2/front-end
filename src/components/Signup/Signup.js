import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { signup, clearError, setOwner, setRenter } from "../../actions";
import { Link, useHistory } from "react-router-dom";
import {
	Typography,
	TextField,
	Button,
	InputAdornment,
} from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";

const initialFormValues = {
	username: "",
	password: "",
};

const Signup = (props) => {
	const { isLoading, isLoggedIn, signup, owner, renter, setOwner, setRenter } =
		props;
	const [signupCredentials, setSignupCredentials] = useState(initialFormValues);
	const history = useHistory();

	useEffect(() => {
		if (isLoggedIn && owner === true) {
			history.push("/owner");
		} else if (isLoggedIn && renter === true) {
			history.push("/renter");
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isLoggedIn, history]);

	const handleChange = (e) => {
		setSignupCredentials({
			...signupCredentials,
			[e.target.name]: e.target.value,
		});
	};

	const ownerSubmit = (e) => {
		signup(signupCredentials);
		setOwner();
	};
	const renterSubmit = (e) => {
		signup(signupCredentials);
		setRenter();
	};

	return (
		<div>
			<Typography variant="h4">Sign Up!</Typography>

			{isLoading && (
				<Box display="flex" justifyContent="center" padding="20px">
					<CircularProgress />
				</Box>
			)}

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

export default connect(mapStateToProps, {
	signup,
	clearError,
	setOwner,
	setRenter,
})(Signup);
