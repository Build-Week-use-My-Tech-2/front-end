import React, { useState } from "react";
import { Link } from "react-router-dom";

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
			signup form
			<form>
				<input
					type="text"
					name="username"
					value={formValues.username}
					placeholder="enter your username"
					onChange={handleChange}
				/>
				<input
					type="text"
					name="password"
					value={formValues.password}
					placeholder="enter your password"
					onChange={handleChange}
				/>
				<button> Im an owner </button>
				<button> Im a renter </button>

				<div>
					already have an account?
					<Link to="/">log in</Link>
				</div>
			</form>
		</div>
	);
};

export default Signup;
