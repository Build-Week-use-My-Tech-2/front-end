import React from "react";
import { Link } from "react-router-dom";

const Renter = () => {
	return (
		<div>
			This is renter page. items up for rent by owners are displayed here. "rent
			this" button/functionality should be added.
			<div>
				<Link to="/rentedItems">
					<button> View items Im currently renting </button>
				</Link>
			</div>
		</div>
	);
};

export default Renter;
