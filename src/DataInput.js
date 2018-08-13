import React, { Component } from 'react';
import styled from 'styled-components';
import axios from '../node_modules/axios';
import {saveUserData} from './utility/actions';
import {connect} from 'react-redux';

const InputRow = styled.div`
	display: flex;
	font-size: 16px;
	height: 34px;
	border-bottom: 1px solid black;
`;
const InputCell = styled.div`
	flex: 1;
	padding: 7px;
`;

const InputInput = styled.input`
	flex: 1;
	margin: 2px 5px;
`;

class DataInput extends Component{

	constructor(){
		super();
		this.state = {
			jmeno: '',
			prijmeni: '',
			email: ''
		};
	}

	render(){
		return (
		<InputRow>
			<InputCell/>
			<InputInput type="text" value={this.state.jmeno} onChange={(e) => this.handleChangeName(e)}/>
			<InputInput type="text" value={this.state.prijmeni} onChange={(e) => this.handleChangeSurname(e)}/>
			<InputInput type="text" value={this.state.email} onChange={(e) => this.handleChangeEmail(e)}/>
			<InputCell>
				<button onClick={() => this.handleClickSave()}>Uložit</button>
			</InputCell>
		</InputRow>
		);
	};

	handleChangeName(e){
		var value = e.target.value;
		this.setState({
			jmeno: value
		});
	};
	handleChangeSurname(e){
		var value = e.target.value;
		this.setState({
			prijmeni: value
		});
	};
	handleChangeEmail(e){
		var value = e.target.value;
		this.setState({
			email: value
		});
	};
	handleClickSave(){
		axios({
			method: 'POST',
			url: `http://localhost:3001/data`,
			data: this.state
		}).then((result) => {
			console.log(result);
			if (result.data.success) {
				this.props.dispatch(saveUserData(result.data.user));
				this.setState({
					jmeno: '',
					prijmeni: '',
					email: ''
				});
			}
		}).catch((err) => {
			console.error(err);
		});
	};
};

export default connect() (DataInput);