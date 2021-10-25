import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import styled from 'styled-components/native';
// import PropTypes from 'prop-types';

const Container = styled.View`
  background-color: 'black';
  padding: 10px;
  margin: 10px;
  flex: 1;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;

const Title = styled.Text`
  font-size: 24px;
  /* color: ${({theme}) => theme.btnTitle}; */
`;

const Button = ({title, onPress, containerStyle, textStyle}) => {
  return (
    <TouchableOpacity
      onPress={() => alert('Test')}
      style={{flexDirection: 'row'}}>
      <Container style={containerStyle}>
        <Title style={textStyle}>{title}</Title>
      </Container>
    </TouchableOpacity>
  );
};

export default Button;
