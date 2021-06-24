import React from "react";
import { connect } from "react-redux";
import { getUser } from "../../actions";

//
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";

const Owner = (props) => {
	const { isLoading, user, renter, owner } = props;
	return (
		<div>
			this is owner page. Items up for rent by the owner are displayed here
			{isLoading && (
				<Box display="flex" justifyContent="center" padding="20px">
					<CircularProgress />
				</Box>
			)}
		</div>
	);
};

const mapStateToProps = (state) => ({
	isLoading: state.isLoading,
	user: state.user,
	owner: state.owner,
	renter: state.renter,
});

export default connect(mapStateToProps, { getUser })(Owner);
