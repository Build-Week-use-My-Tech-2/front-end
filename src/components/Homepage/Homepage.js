import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledWrapper = styled.section`
	max-width: 1200px;
	margin: auto;
`
const StyledBanner = styled.section`
	display: flex;
	flex-wrap: wrap;
	margin: 0em 4.5em;
	justify-content: center;
`
const StyledPics = styled.img`
	max-width: 20rem;
	height: 100%;
	border-radius: 15%;
	margin: 2em;
`
const StyledP = styled.p`
	margin: 2em;
	font-size: 21px;
	line-height: 36px;
	text-align: justify;
	height: 344px;
	width: 416px;
	display: flex;
	justify-content: center;
	align-items: center;
`

const StyledButton = styled.button`
	display:inline-block;
	font:normal normal 300 1.3em 'Open Sans';
    text-decoration:none;	
	color:rgba(28, 190, 131, 1);
	brackground-color:transparent;
	border:1px solid rgba(28, 190, 131, 1);
	border-radius:100px;
	padding: .3em 1.2em;
	margin:5px;		  
	background-size: 200% 100%;	
	background-image: linear-gradient(to right, transparent 50%, rgba(28, 190, 131, 1) 50%);
	transition: background-position .3s cubic-bezier(0.19, 1, 0.22, 1) .1s, color .5s ease 0s, background-color .5s ease;
	&:hover {
		color:rgba(255, 255, 255, 1);
		background-color:rgba(28, 190, 131, 1);
		background-position: -100% 100%;
	}
`
const Homepage = () => {
	return (
		<StyledWrapper>
			<h1>Use My Tech</h1>
			<h2>Browse our available Inventory:</h2>
			<div>
				<Link to="/login">
					<StyledButton> Login </StyledButton>
				</Link>
			</div>

			<StyledBanner>
				<StyledPics src="images/pic02.jpg" />
				<StyledP>Tired of paying premiums for expensive electornic equipment? Rent it instead!
					If you use our service you can save thousands a year for equipment you only
					need once or twice. Check out this cool MacBook Air, it could be yours for
					the day!
				</StyledP>
				<StyledP>Check out this sick drone. You know you want to fly this
					bad boy. Maybe you want to film a wedding, or scout out some
					properties. If you rented this, you could be in the air
					in no time!
				</StyledP>
				<StyledPics src="images/pic03.jpg" />
				<StyledPics src="images/pic01.jpg" />
				<StyledP>Maybe you have a disco you're wanting to host? Maybe you
					have a college party you want to entertain? With this bad boy,
					you can be making music in no time.
				</StyledP>
			</StyledBanner>
		</StyledWrapper>
	);
};

export default Homepage;