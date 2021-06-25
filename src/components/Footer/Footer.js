import React from "react";
import styled from "styled-components";

const StyledFooter = styled.body`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const StyledFooting = styled.footer`
	display: flex;
	justify-content: center;
	font-family: trebuchet ms;
	color: black;
	font-size: 1.3em;
	height: 3em;
	width: 3em;
	padding: 0.2em;
	margin-bottom: 1em;
	background: white;
`;

const Footer = () => {
	return (
		<footer>
			<StyledFooter>
				<StyledFooting>Use My Tech</StyledFooting>
				<nav>
					<a href="/signup">
						© {new Date().getFullYear()} Use My Tech, Inc. All Rights Reserved.
					</a>
				</nav>
			</StyledFooter>
		</footer>
	);
};

export default Footer;
