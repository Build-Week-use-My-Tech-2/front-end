import React, { useState } from "react";

const initialLoginCredentials = {
	email: "",
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

	return (
		<div>
			<form>
				<input
					type="text"
					name="email"
					value={loginCredentials.email}
					placeholder="enter your email"
					onChange={handleChange}
				/>
				<input
					type="text"
					name="password"
					value={loginCredentials.password}
					placeholder="enter your password"
					onChange={handleChange}
				/>

				<button> Im an owner </button>
				<button> Im a renter </button>
			</form>
		</div>
	);
};

export default Login;
