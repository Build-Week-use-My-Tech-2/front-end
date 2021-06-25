import React from "react";

const Header = () => {
	return (
		<header>
			<nav>
				<a href="/" style={{ padding: "20px" }}>
					Home |{" "}
				</a>
				{/* <a href="rentedItems"> Your Current Inventory | </a> */}
				<a href="/signup" style={{ padding: "20px" }}>
					{" "}
					Sign up |{" "}
				</a>
				<a href="/login" style={{ padding: "20px" }}>
					Log in
				</a>
			</nav>
		</header>
	);
};

export default Header;
