import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const initialLoginCredentials = {
	username: "",
	password: "",
};

const Login = () => {
	const [loginCredentials, setLoginCredentials] = useState(
		initialLoginCredentials,
	);

	const handleChange = (e) => {
		setLoginCredentials({
			...loginCredentials,
			[e.target.name]: e.target.value,
		});
	};

	const history = useHistory();
	const ownerSubmit = (e) => {
		history.push("/owner");
	};
	const renterSubmit = (e) => {
		history.push("/renter");
	};

	return (
		<div>
			Login Form
			<form>
				<input
					type="text"
					name="username"
					value={loginCredentials.username}
					placeholder="enter your username"
					onChange={handleChange}
				/>
				<input
					type="text"
					name="password"
					value={loginCredentials.password}
					placeholder="enter your password"
					onChange={handleChange}
				/>

				<button onClick={ownerSubmit}> Im an owner </button>
				<button onClick={renterSubmit}> Im a renter </button>
			</form>
			<div>
				dont have an account?
				<Link to="/signup">sign up</Link>
			</div>
		</div>
	);
};

export default Login;
