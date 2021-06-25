import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";

//
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
	cardGrid: {
		paddingTop: theme.spacing(4),
		paddingBottom: theme.spacing(8),
	},
	card: {
		textAlign: "left",
		height: "100%",
		display: "flex",
		flexDirection: "column",
		padding: theme.spacing(2),
		backgroundColor: "white",
	},
	cardButton: {
		"&:hover": {
			backgroundColor: "#000000",
			color: "#fff",
		},
	},
	cardMedia: {
		paddingTop: "56.25%", // 16:9
	},
	cardContent: {
		flexGrow: 1,
	},
}));

const Owner = (props) => {
	const [gadgets, setGadgets] = useState([]);
	const { isLoading } = props;
	const classes = useStyles();

	useEffect(() => {
		axios
			.get("https://picsum.photos/v2/list")
			.then((res) => setGadgets(res.data));
	}, []);

	return (
		<div>
			<h1>My Items For Rent</h1>
			<div>
				<Container className={classes.cardGrid}>
					{isLoading && (
						<Box display="flex" justifyContent="center" padding="20px">
							<CircularProgress />
						</Box>
					)}
					{!isLoading && (
						<Grid container spacing={4}>
							{gadgets.map((card, index) => (
								<Grid item key={index} xs={12} sm={6} md={4}>
									<Card className={classes.card}>
										<CardMedia
											className={classes.cardMedia}
											image={card.download_url}
										/>
										<CardContent className={classes.cardContent}>
											<Typography gutterBottom variant="h6" component="h6">
												{card.url} <br />
											</Typography>
											<Typography>
												Description: {card.description} <br />
												Owner: {card.author} <br />
												Cost to Rent: {card.id}
											</Typography>
										</CardContent>
										<CardActions>
											<Button
												className={classes.cardButton}
												variant="contained"
												size="small"
											>
												Delete this item
											</Button>
										</CardActions>
									</Card>
								</Grid>
							))}
						</Grid>
					)}
				</Container>
			</div>
			<div>
				<Link to="/rentedItems">
					<button> View items Im currently renting </button>
				</Link>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	isLoading: state.isLoading,
	user: state.user,
});
export default connect(mapStateToProps, {})(Owner);
