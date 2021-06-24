import {
	START_FETCHING,
	SIGNUP,
	LOGIN,
	FETCHING_USER_SUCCESS,
	// SET_OWNER,
	// SET_RENTER,
	// UPDATE_USER_SUCCESS,
	// CREATE_ITEM_SUCCESS,
	// UPDATE_ITEM_SUCCESS,
	// DELETE_ITEM_SUCCESS,
	// FETCH_ERROR,
	// LOGOUT,
	// CLEAR_ERROR,
} from "../actions";

export const initialState = {
	isTesting: false,
	isLoading: false,
	isLoggedIn: false,
	user: null,
	owner: null,
	renter: null,
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case START_FETCHING:
			return {
				...state,
				isLoading: true,
			};
		case LOGIN:
			return {
				...state,
				isLoggedIn: true,
				fetchError: null,
				isLoading: false,
			};
		case SIGNUP:
			return {
				...state,
				user: action.payload,
				isLoading: false,
			};
		case FETCHING_USER_SUCCESS:
			return {
				...state,
				user: action.payload,
				fetchError: null,
				isLoading: false,
			};
		// case SET_OWNER:
		// 	return {
		// 		...state,
		// 		owner: true,
		// 		renter: false,
		// 	};
		// case SET_RENTER:
		// 	return {
		// 		...state,
		// 		renter: true,
		// 		owner: false,
		// 	};
		default:
			return state;
	}
};
