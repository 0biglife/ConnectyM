import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import AuthLogo from './authLogo';
import AuthForm from './authForm';

class AuthComponent extends Component {
  state = {
    loading: false,
  };

  render() {
    if (this.state.loading) {
      return (
        <View style={styles.loading}>
          <ActivityIndicator />
        </View>
      );
    } else {
      return (
        <ScrollView style={styles.container}>
          <View>
            <AuthLogo />
            <AuthForm />
          </View>
        </ScrollView>
      );
    }
  }
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: 130,
    paddingLeft: 50,
    paddingRight: 50,
  },
});

export default AuthComponent;
