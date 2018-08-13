import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {connect} from 'react-redux';
import {deleteUserData} from './utility/actions';

const UserRow = styled.div`
	display: flex;
	font-size: 16px;
	&:hover{
		background-color: #99C1F7;
	}

`;
const UserCell = styled.div`
	flex: 1;
	border-bottom: 1px solid black;
	padding: 7px;
`;
function Row(props){
	return(
	<UserRow>
		<UserCell>{props.user.id}</UserCell>
		<UserCell>{props.user.jmeno}</UserCell>
		<UserCell>{props.user.prijmeni}</UserCell>
		<UserCell>{props.user.email}</UserCell>
		<UserCell>
			<button onClick={() => handleClick(props.dispatch,props.user.id)}>Smazat</button>
		</UserCell>
	</UserRow>)
};

const handleClick = (dispatch, id)=>{
	axios({
		method: 'DELETE',
		url: `http://localhost:3001/data/${id}`
	}).then(() => {
		dispatch(deleteUserData(id));
		console.log('hotovo')
	}).catch((err) => {
		console.error(err);
	});
	return;
};

export default connect() (Row);