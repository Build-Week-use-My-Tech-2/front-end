import React from "react";

const Header = () => {
	return (
		<header>
			<nav>
				<a href="/">Home | </a>
				{/* <a href="rentedItems"> Your Current Inventory | </a> */}
				<a href="/signup"> Sign up | </a>
				<a href="/login">Log in</a>
			</nav>
		</header>

	)
};

export default Header;
