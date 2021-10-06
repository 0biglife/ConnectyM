import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const Container = styled.View`
    background-color: ${({ theme }) => theme.btnBackground};
    padding: 10px;
    margin: 10px;
    flex: 1;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
`;

const Title = styled.Text`
    font-size: 24px;
    color: ${({theme}) => theme.btnTitle};
`;

const Button = ({ title, onPress, containerStyle, textStyle }) => {
    return (
        <TouchableOpacity onPress={onPress} style={{ flexDirection: 'row' }}>
            <Container style={containerStyle}>
                <Title style={textStyle}>
                    {title}
                </Title>
            </Container>
        </TouchableOpacity>
    );
};

Button.proptype = {
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    containerStyle: PropTypes.object,
    textStyle: PropTypes.object,
};

export default Button;