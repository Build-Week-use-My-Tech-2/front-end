const TESTING = "TESTING";

export const initialState = {
	isTesting: false,
	// isLoading: false,
	// isLoggedIn: false,
	// owner: null,
	// renter: null,
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case TESTING:
			return {
				...state,
				isTesting: true,
			};
		default:
			return state;
	}
};
