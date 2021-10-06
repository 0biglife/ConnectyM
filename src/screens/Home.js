import React from 'react';
import styled from 'styled-components/native';
import { Button } from '../components';

const Container = styled.View`
	flex: 1;
	background-color: ${({ theme }) => theme.background};
`;

const StyledText = styled.Text`
	font-size: 30px;
`;

const Home = () => {
	return (
		<Container>
			<StyledText>Home</StyledText>
			<Button title="Create" onPress={() => {}} />
			<Button title="Channel" onPress={() => {}} />
		</Container>
	);
};

export default Home;
