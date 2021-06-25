import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
	display: flex;
`;
const StyledHeading = styled.h1`
	display: flex;
	font-family: trebuchet ms;
	color: black;
	font-size: 2em;
	height: 3em;
	width: 3.3em;
	padding: 0.2em;
	margin-left: 2em;
	background: white;
`;
const StyledNav = styled.nav`
	display: flex;
	justify-content: space-evenly;
	font-size: 1.5em;
	margin-left: 28%;
`;

const Header = () => {
	return (
		<StyledHeader>
			<StyledHeading>Use My Tech</StyledHeading>
			<header>
				<StyledNav>
					<a href="/">[ Home ]</a>
					<a href="/signup">[ Sign Up ]</a>
					<a href="/login">[ Log In ]</a>
				</StyledNav>
			</header>
		</StyledHeader>
	);
};

export default Header;
