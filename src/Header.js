import React from 'react';
import styled from 'styled-components';

const HeaderRow = styled.div`
	display: flex;
	font-size: 20px;
`;
const HeaderCell = styled.div`
	flex: 1;
	border-bottom: 1px solid black;
	padding: 10px;
`;

function Header() {
	return (
		<HeaderRow>
			<HeaderCell>id</HeaderCell>
			<HeaderCell>jméno</HeaderCell>
			<HeaderCell>příjmení</HeaderCell>
			<HeaderCell>email</HeaderCell>
			<HeaderCell>action buttons</HeaderCell>
		</HeaderRow>
	)
};

export default Header;