import React from 'react';
import styled from 'styled-components/native';
import { Button } from '../components';

const Container = styled.View`
	flex: 1;
	background-color: ${({ theme }) => theme.background};
`;

const Profile = ({ navigationo }) => {
	return (
		<Container>
			<Button title="signout" onPress={() => navigationo.navigate('Signin')} />
		</Container>
	);
};

export default Profile;
