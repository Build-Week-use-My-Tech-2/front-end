import React from "react";

const Header = () => {
	return (
		<header>
        <nav>
          <a href="/">Home</a>
		  <a> | </a>
		  <a href="rentedItems"> Your Current Inventory</a>
		  <a> | </a>
		  <a href="/signup"> Sign up </a> <a> or</a>  <a href="/login">Log in</a>
        </nav>
      </header>

		)
};

export default Header;
