import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Platform, Image} from 'react-native';
import styled from 'styled-components/native';
import Button from '../../components/Button';
import LogoImage from '../../assets/images/Connecty_logo.png';

//Social Login 
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';


const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding-top: 180px;
  justify-content: center;
`;

const Login = ({navigation}) => {
  const [userInfo, setUserInfo] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setErrror] = useState(null);

  useEffect(() => {
    configureGoogleSign();
  }, []);

  configureGoogleSign = () => {
    GoogleSignin.configure({
      webClientId:
        '21966285335-pd59r4mk54v02nd8v5k2kem3gt1th3fl.apps.googleusercontent.com',
      offlineAccess: false,
    });;
  };

  _signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

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

      <View style={{marginTop: 40}}>
        <View style={styles.button}>
          <Button
            title="BLANK"
            color="#48567f"
            onPress={() => navigation.navigate('AppTabComponent')}
          />
          <GoogleSigninButton
            style={{ width: 192, height: 48 }}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={_signIn}
          />
        </View>
      </View>
    </View>
  );
};

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

export default Login;
