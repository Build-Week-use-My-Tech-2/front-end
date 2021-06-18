import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Homepage = () => {
	const [itemsForRent, setItemsForRent] = useState([]);

	useEffect(() => {
		axios
			.get("https://picsum.photos/v2/list")
			.then((res) => {
				console.log(res.data);
				setItemsForRent(res.data);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<div>
			This is a homepage. All the items for rent listed by owners are shown
			here.
			<div>
				{itemsForRent.map((item) => {
					return (
						<img
							key={item.id}
							alt="electronic item"
							src={item.download_url}
							height="200px"
						/>
					);
				})}
			</div>
			<div>
				Login button here
				<Link to="/login">
					<button> Login </button>
				</Link>
			</div>
		</div>
	);
};

export default Homepage;
