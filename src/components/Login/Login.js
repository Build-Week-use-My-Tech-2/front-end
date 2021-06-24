import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { login, clearError } from "../../actions";
import { Link, useHistory } from "react-router-dom";

//
import {
	Typography,
	Button,
	TextField,
	InputAdornment,
} from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { findByLabelText } from "@testing-library/react";

const initialLoginCredentials = {
	username: "",
	password: "",
};

const useStyles = makeStyles((theme) => ({
	container: {
		height: "100%",
	},
	form: {
		width: "100%", // Fix IE 11 issue.
		marginTop: theme.spacing(4),
	},
	textField: { marginLeft: theme.spacing(2), marginRight: theme.spacing(2) },
}));

const Login = (props) => {
	// const { isLoading, isLoggedIn, login, clearError } = props;
	const { isLoading, isLoggedIn, login, owner, renter } = props;
	const [loginCredentials, setLoginCredentials] = useState(
		initialLoginCredentials,
	);
	const history = useHistory();
	const classes = useStyles();

	useEffect(() => {
		if (isLoggedIn && owner === true) {
			history.push("/owner");
		} else if (isLoggedIn && renter === true) {
			history.push("/renter");
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isLoggedIn, history]);

	const handleChange = (e) => {
		setLoginCredentials({
			...loginCredentials,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		login(loginCredentials);
	};

	return (
		<Container component="main" maxWidth="lg" className={classes.container}>
			<div>
				<Typography variant="h4">Login</Typography>

				{isLoading && (
					<Box display="flex" justifyContent="center" padding="20px">
						<CircularProgress />
					</Box>
				)}

				<form className={classes.form}>
					<TextField
						className={classes.textField}
						type="text"
						name="username"
						value={loginCredentials.username}
						placeholder="Enter your email"
						required
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
						className={classes.textField}
						type="text"
						name="password"
						value={loginCredentials.password}
						required
						placeholder="Enter your password"
						onChange={handleChange}
					/>

					<Button variant="outlined" size="small" onClick={handleSubmit}>
						Login
					</Button>
				</form>
				<div>
					<Typography variant="subtitle1"> Don't have an account?</Typography>

					<Link to="/signup">sign up</Link>
				</div>
			</div>
		</Container>
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
