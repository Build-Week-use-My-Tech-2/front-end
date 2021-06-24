import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUser } from "../../actions";

const Owner = (props) => {
	const { isLoading, user, owner, renter, getUser } = props;

	useEffect(() => {
		getUser(localStorage.getItem("userId"));
	}, [getUser]);

	return (
		<div>
			this is owner page. Items up for rent by the owner are displayed here
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
