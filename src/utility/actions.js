export const setUsersData = (result) =>{
	return {
		type: 'set_users_data',
		payload: result
	};
};

export const setErrorData = () =>{
	return {
		type: 'set_error_data',
		payload: null
	};
};

export const deleteUserData = (id) => {
	return {
		type: 'delete_user_data',
		payload: id
	};
};

export const saveUserData = (user) =>{
	return {
		type: 'add_user_data',
		payload: user
	}

}