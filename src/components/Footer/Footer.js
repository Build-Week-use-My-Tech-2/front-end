import React from "react";
import styled from "styled-components";
const StyledFooter = styled.body`
	display: flex;
	flex-direction: column;
	align-items: center;
	background: black;
`;

const StyledFooting = styled.footer`
	display: flex;
	align-content: center;
	flex-direction: column-reverse;
	font-family: trebuchet ms;
	color: black;
	font-size: 1rem;
	line-height: 1rem;
	height: 3rem;
	width: 3rem;
	padding: 0rem 1rem 0rem 1rem;
	background: white;
`;

const Footer = () => {
	return (
		<footer>
			<StyledFooter>
				<nav>
					<a href="/signup">
						© {new Date().getFullYear()} Use My Tech, Inc. All Rights Reserved.
					</a>
				</nav> 
				<br />
				<StyledFooting>Use My Tech</StyledFooting>
			</StyledFooter>
		</footer>
	);
};
export default Footer;