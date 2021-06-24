import axiosWithAuth from "../utils/axiosWithAuth";

export const START_FETCHING = "START_FETCHING";
export const SIGNUP = "SIGNUP";
export const LOGIN = "LOGIN";
export const FETCHING_USER_SUCCESS = "FETCHING_USER_SUCCESS";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const CREATE_ITEM_SUCCESS = "CREATE_ITEM_SUCCESS";
export const UPDATE_ITEM_SUCCESS = "UPDATE_ITEM_SUCCESS";
export const DELETE_ITEM_SUCCESS = "DELETE_ITEM_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";
export const LOGOUT = "LOGOUT";
export const CLEAR_ERROR = "CLEAR_ERROR";
export const SET_OWNER = "SET_OWNER";
export const SET_RENTER = "SET RENTER";
//

export const signup = (signupCredentials) => (dispatch) => {
	console.log("signup credentials", signupCredentials);
	dispatch({
		type: START_FETCHING,
	});
	axiosWithAuth()
		.post("https://reqres.in/api/register", signupCredentials)
		.then((response) => {
			console.log("response", response);
			localStorage.setItem("token", response.data.token);
			localStorage.setItem("userId", response.data.id);
			dispatch({
				type: SIGNUP,
				payload: response.data,
			});
		})
		.catch((error) => {
			dispatch({
				type: FETCH_ERROR,
				payload: error.response.data.message,
			});
		});
};

export const login = (loginCredentials) => (dispatch) => {
	console.log("login credentials", loginCredentials);
	dispatch({
		type: START_FETCHING,
	});
	axiosWithAuth()
		.post("https://reqres.in/api/login", loginCredentials)
		.then((response) => {
			console.log(response);
			localStorage.setItem("token", response.data.token);
			dispatch({
				type: LOGIN,
			});
		})
		.catch((error) => {
			dispatch({
				type: FETCH_ERROR,
				payload: error.response.data.message,
			});
		});
};

export const getUser = (id) => (dispatch) => {
	dispatch({
		type: START_FETCHING,
	});
	axiosWithAuth()
		.get(`https://reqres.in/api/users/${id}`)
		.then((response) => {
			dispatch({
				type: FETCHING_USER_SUCCESS,
				payload: response.data,
			});
		})
		.catch((error) => {
			console.log(error);
			dispatch({
				type: FETCH_ERROR,
				payload: error.message,
			});
		});
};

// export const updateUser = (user) => (dispatch) => {
// 	const id = localStorage.getItem("userId");
// 	dispatch({
// 		type: START_FETCHING,
// 	});
// 	axiosWithAuth()
// 		.put(`https://reqres.in/api/users/${id}`, user)
// 		.then((response) => {
// 			console.log("update user response", response);
// 			dispatch({
// 				type: UPDATE_USER_SUCCESS,
// 				payload: response.data,
// 			});
// 		})
// 		.catch((error) => {
// 			console.log(error);
// 			dispatch({
// 				type: FETCH_ERROR,
// 				payload: error.message,
// 			});
// 		});
// };

// export const createItem = (item) => (dispatch) => {
// 	dispatch({
// 		type: START_FETCHING,
// 	});
// 	axiosWithAuth()
// 		.post("https://reqres.in/api/users/", item)
// 		.then((createdItem) => {
// 			const id = localStorage.getItem("userId");
// 			axiosWithAuth()
// 				.post(`https://reqres.in/api/users/${id}`, {
// 					item_id: createdItem.data.id,
// 				})
// 				.then((updatedUser) => {
// 					dispatch({
// 						type: CREATE_ITEM_SUCCESS,
// 						payload: updatedUser.data,
// 					});
// 				});
// 		})
// 		.catch((error) => {
// 			console.log(error);
// 			dispatch({
// 				type: FETCH_ERROR,
// 				payload: error.message,
// 			});
// 		});
// };

// export const updateItem = (item) => (dispatch) => {
// 	dispatch({
// 		type: START_FETCHING,
// 	});
// 	axiosWithAuth()
// 		.put(`https://reqres.in/api/users/${item.id}`, item)
// 		.then((response) => {
// 			dispatch({
// 				type: UPDATE_ITEM_SUCCESS,
// 				payload: response.data,
// 			});
// 		})
// 		.catch((error) => {
// 			console.log(error);
// 			dispatch({
// 				type: FETCH_ERROR,
// 				payload: error.message,
// 			});
// 		});
// };

// // export const deleteItem = (item) => (dispatch) => {
// //     dispatch({
// //         type: START_FETCHING
// //     });
// //     const id = localStorage.getItem('userId');
// //     const data = {
// //         item_id: item.id
// //     }
// //     axiosWithAuth().delete(`https://reqres.in/api/users/`, { data: data })
// //         .then((response) => {
// //             dispatch({
// //                 type: DELETE_ITEM_SUCCESS,
// //                 payload: item
// //             });
// //         })
// //         .catch((error) => {
// //             console.log(error);
// //             dispatch({
// //                 type: FETCH_ERROR,
// //                 payload: error.message
// //             });
// //         })
// // };

export const logout = () => (dispatch) => {
	localStorage.clear();
	dispatch({
		type: LOGOUT,
	});
};

export const clearError = () => (dispatch) => {
	dispatch({
		type: CLEAR_ERROR,
	});
};

export const setOwner = () => (dispatch) => {
	dispatch({
		type: SET_OWNER,
	});
};

export const setRenter = () => (dispatch) => {
	dispatch({
		type: SET_RENTER,
	});
};
