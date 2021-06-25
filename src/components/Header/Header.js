import React from "react";
import styled from "styled-components";
const StyledHeader = styled.header`
	display: flex;
`;
const StyledHeading = styled.h1`
	display: flex;
	align-items: center;
	flex-direction: column-reverse;
	font-family: trebuchet ms;
	color: black;
	font-size: 1.4rem;
	line-height: 1.6rem;
	height: 4.8rem;
	width: 4.8rem;
	padding: 0rem 1rem 0rem 1rem;
	margin-left: 2rem;
	background: white;
`;
const StyledNav = styled.nav`
	display: flex;
	flex-flow: wrap;
	justify-content: space-evenly;
	font-size: 1.2rem;
	margin-left: 50%;
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
					<a href="/logout">[ Log out ]</a>
				</StyledNav>
			</header>
		</StyledHeader>
	);
};
export default Header;