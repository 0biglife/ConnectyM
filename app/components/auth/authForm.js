import React, {Component} from 'react';

import {StyleSheet, Text, View, TextInput} from 'react-native';
import Input from '../../utils/forms/input';

class AuthForm extends Component {
  state = {
    type: 'Login',
    action: 'Login',
    actionMode: '새로 등록할게요~', //Button Title String값
    hasErrors: false,
    form: {
      email: {
        value: '',
        type: 'textinputRevised',
        rules: {},
        valid: false,
      },
      password: {
        value: '',
        type: 'textinput',
        rules: {},
        valid: false,
      },
      confirmPassword: {
        value: '',
        type: 'textinput',
        rules: {},
        valid: false,
      },
    },
  };

  updateInput = (name, value) => {
    this.setState({
      hasErrors: false,
    });;
    let formCopy = this.state.form;
    formCopy[name].value = value;

    this.setState({
      form: formCopy,
    });;

    console.warn(this.state.form)
  };

  render() {
    return (
      <View>
        <Input
          value={this.state.form.email.value}
          type={this.state.form.email.type}
          autoCapitalize={'none'}
          keyboardType={'email-address'}
          placeholder="이메일 주소"
          placeholderTextColor="#ddd"
          onChangeText={value => this.updateInput('email', value)}
        />
        <Input
          value={this.state.form.password.value}
          type={this.state.form.password.type}
          secureTextEntry={true}
          placeholder="비밀번호"
          placeholderTextColor="#ddd"
          onChangeText={value => this.updateInput('password', value)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    fontSize: 17,
    padding: 5,
    marginTop: 30,
  },
});

export default AuthForm;
