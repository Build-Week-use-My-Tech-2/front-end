import * as React from "react";
import { Link } from "react-router-dom";
// import axios from "axios";
import styled from "styled-components";

const StyledWrapper = styled.section`
	max-width: 1200px;
	margin: auto;
`;
const StyledBanner = styled.section`
	display: flex;
	flex-wrap: wrap;
	margin: 0em 4.5em;
	justify-content: center;
`;
const StyledPics = styled.img`
	max-width: 20rem;
	height: 100%;
	border-radius: 15%;
	margin: 2em;
`;
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
`;

const StyledButton = styled.button`
	display: inline-block;
	font: normal normal 300 1.3em "Open Sans";
	text-decoration: none;
	color: rgba(28, 190, 131, 1);
	brackground-color: transparent;
	border: 1px solid rgba(28, 190, 131, 1);
	border-radius: 100px;
	padding: 0.3em 1.2em;
	margin: 5px;
	background-size: 200% 100%;
	background-image: linear-gradient(
		to right,
		transparent 50%,
		rgba(28, 190, 131, 1) 50%
	);
	transition: background-position 0.3s cubic-bezier(0.19, 1, 0.22, 1) 0.1s,
		color 0.5s ease 0s, background-color 0.5s ease;
	&:hover {
		color: rgba(255, 255, 255, 1);
		background-color: rgba(28, 190, 131, 1);
		background-position: -100% 100%;
	}
`;
const Homepage = () => {
	const [users, setUsers] = React.useState([]);
	const f = async () => {
		const res = await fetch("https://reqres.in/api/users/");
		const json = await res.json();
		setUsers(json.data);
	};
	React.useEffect(() => {
		f();
	}, []);
	// const Homepage = () => {
	// const [itemsForRent, setItemsForRent] = useState([]);
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
			<div>
				{/* Login button here */}
				<Link to="/login">
					<StyledButton> Login </StyledButton>
				</Link>
			</div>

			{/* <div className="wrapper">
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
			</div> */}

			<StyledBanner>
				<StyledPics src="images/pic02.jpg" />
				<StyledP>
					Tired of paying premiums for expensive electornic equipment? Rent it
					instead! If you use our service you can save thousands a year for
					equipment you only need once or twice. Check out this cool MacBook
					Air, it could be yours for the day!
				</StyledP>
				<StyledP>
					Check out this sick drone. You know you want to fly this bad boy.
					Maybe you want to film a wedding, or scout out some properties. If you
					rented this, you could be in the air in no time!
				</StyledP>
				<StyledPics src="images/pic03.jpg" />
				<StyledPics src="images/pic01.jpg" />
				<StyledP>
					Maybe you have a disco you're wanting to host? Maybe you have a
					college party you want to entertain? With this bad boy, you can be
					making music in no time.
				</StyledP>
			</StyledBanner>
		</StyledWrapper>
	);
};

export default Homepage;
