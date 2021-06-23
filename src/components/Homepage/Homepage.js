import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";
import styled from "styled-components";

const StyledWrapper = styled.section`
	max-width: 1200px;
	margin: auto;
`
const StyledBanner = styled.section`
	display: flex;
	flex-wrap: wrap;
	margin: 0em 4.5em;
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
const Homepage = () => {
	const [itemsForRent, setItemsForRent] = useState([]);

	// useEffect(() => {
	// 	axios
	// 		.get("https://picsum.photos/v2/list")
	// 		.then((res) => {
	// 			console.log(res.data);
	// 			setItemsForRent(res.data);
	// 		})
	// 		.catch((err) => console.log(err));
	// }, []);

	return (
		<StyledWrapper>
			<h1>Use My Tech</h1>
			<h2>Browse our available Inventory:</h2>
			<div className="wrapper">
				{itemsForRent.map((item) => {
					return (
						<img
							id='inventory'
							key={item.id}
							alt="electronic item"
							src={item.download_url}
							height="200px"
							width="200px"
						/>
					);
				})}
			</div>
			<div>
				{/* Login button here */}
				<Link to="/login">
					<button> Login </button>
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
