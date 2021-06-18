import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
	return (
		<div>
			This is a homepage. All the items for rent listed by owners are shown
			here.
			<div>
				Login button here
				<Link to="/login">
					<button> Login </button>
				</Link>
			</div>
		</div>
	);
};

export default Homepage;
