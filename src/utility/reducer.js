const initialState = {
	loading: true,
	users: []
};

export default (state = initialState, action) => {

	switch (action.type) {

		case 'set_users_data':{
			return {
				...state,
				users: action.payload,
				loading: false
			}
		}

		case 'set_error_data':{
			return {
				...state,
				loading: false,
				error: true
			}
		}

		case 'delete_user_data':{
			let newUsers = state.users.filter(user => {
				return user.id !== action.payload;
			});
			return {
				...state,
				users: newUsers
			}
		}

		case 'add_user_data': {
			let newUsers = [...state.users];
			newUsers.push(action.payload);
			return {
				...state,
				users: newUsers
			}
		}

		default: return state;
	};
};