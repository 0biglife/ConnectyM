import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  Image,
  ScrollView,
} from 'react-native';
import Input from '../../utils/forms/input';
import Button from '../../components/Button';
import validationRules from '../../utils/forms/validationRules';
import LogoImage from '../../assets/images/Connecty_logo.png';
import HomeView from '../Home';

class LoginView extends Component {
  state = {
    loading: false,

    type: '로그인',
    action: '로그인',
    actionMode: '회원가입', //Button Title String값
    hasErrors: false,
    form: {
      email: {
        value: '',
        type: 'textinput',
        rules: {
          isRequired: true,
          isEmail: true,
        },
        valid: false,
      },
      password: {
        value: '',
        type: 'textinput',
        rules: {
          isRequired: true,
          minLength: 6,
        },
        valid: false,
      },
      confirmPassword: {
        value: '',
        type: 'textinput',
        rules: {
          confirmPassword: 'password',
        },
        valid: false,
      },
    },
  };

  goWithoutLogin = () => {
    this.props.navigation.navigate('AppTabComponent');
  };

  updateInput = (name, value) => {
    this.setState({
      hasErrors: false,
    });
    let formCopy = this.state.form;
    formCopy[name].value = value;

    //rules
    let rules = formCopy[name].rules;
    let valid = validationRules(value, rules, formCopy);
    formCopy[name].valid = valid;

    this.setState({
      form: formCopy,
    });

    // console.warn(this.state.form);
  };

  formHasErrors = () => {
    this.state.hasErrors ? (
      <View style={styles.errorContainer}>
        <Text style={styles.errorLabel}>에러 발생</Text>
      </View>
    ) : null;
  };

  gotoHomeView() {
    this.props.navigation.navigate('AppTabComponent');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{alignItems: 'center', marginBottom: 30}}>
          <Image
            source={LogoImage}
            resizeMode={'contain'} //가로세로 비율 유지. 꽉 채워지도록.
            style={{
              width: 300,
              height: 88,
            }}
          />
        </View>
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
        {this.formHasErrors()}

        <View style={{marginTop: 40}}>
          <View style={styles.button}>
            <Button
              title="go to HomeView"
              color="#48567f"
              onPress={() => this.gotoHomeView()}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: 180,
    paddingLeft: 50,
    paddingRight: 50,
  },
  input: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    fontSize: 17,
    padding: 5,
    marginTop: 30,
  },
  errorContainer: {
    marginBottom: 10,
    marginTop: 30,
    padding: 20,
    backgroundColor: '#ee3344',
  },
  errorLabel: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  button: {
    ...Platform.select({
      ios: {
        marginTop: 15,
      },
      android: {
        marginTop: 15,
        marginBottom: 10,
      },
    }),
  },
});

export default LoginView;
