import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import Header from './Header';
import DataInput from './DataInput';

import Row from './Row';

import * as actions from './utility/actions';
import {bindActionCreators} from 'redux';

import styled from 'styled-components';

const UsersTable = styled.div`
	margin: 15px;
`;

const ErrorDiv = styled.div`
	color: red;
	margin: 15px;
	font-size:25px;
`;

class Table extends Component{
	

	componentDidMount(){
		axios.get('http://localhost:3001/data')
		.then(result => this.props.setUsersData(result.data.data))
		.catch(err => this.props.setErrorData());
	};

	render(){
		return this.props.loading ? (<div>načítám</div>
		) : ( this.props.error ? (<ErrorDiv> nepodařilo se načíst data</ErrorDiv>) :
			<UsersTable>
			<Header />
			<DataInput />
			{this.props.users.map(user => {return <Row key={user.id} user={user}/>})}
			</UsersTable>
		)
	}
};

function mapStateToProps(state, props) {
	return {
		loading: state.reducer.loading,
		error: state.reducer.error,
		users: state.reducer.users
	};
};

function mapDispatchToProps(dispatch){
	return {
		setUsersData: bindActionCreators(actions.setUsersData, dispatch),
		setErrorData: bindActionCreators(actions.setErrorData, dispatch)
	};	
};

export default connect(mapStateToProps, mapDispatchToProps) (Table);