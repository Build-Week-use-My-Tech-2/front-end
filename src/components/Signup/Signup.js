import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Typography, TextField, Button, InputAdornment } from "@material-ui/core";
import { AccountCircle } from '@material-ui/icons'

const initialFormValues = {
	username: "",
	password: "",
};

const Signup = () => {
	const [formValues, setFormValues] = useState(initialFormValues);

	const handleChange = (e) => {
		setFormValues({
			...formValues,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<div>
			<Typography variant="h4">
			Sign Up!
			</Typography>
			<form>
				<TextField
					type="text"
					name="username"
					value={formValues.username}
					placeholder="enter your username"
					onChange={handleChange}
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">
								<AccountCircle />
							</InputAdornment>
						)
					}}
				/>
				<TextField
					type="text"
					name="password"
					value={formValues.password}
					placeholder="enter your password"
					onChange={handleChange}
				/>
				<Button variant="outlined"> Im an owner </Button>
				<Button variant="outlined"> Im a renter </Button>

				<div>
					<Typography variant="subtitle1">
					already have an account?
					</Typography>
					
					<Link to="/">log in</Link>
				</div>
			</form>
		</div>
	);
};

export default Signup;
