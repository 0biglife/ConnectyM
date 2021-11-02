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
    GoogleSignin.configure({
      webClientId:
        '21966285335-pd59r4mk54v02nd8v5k2kem3gt1th3fl.apps.googleusercontent.com',
      offlineAccess: true,
      forceCodeForRefreshToken: true,
    });
    isSignedIn()
  }, []);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('please let me do this____', userInfo);
      setUserInfo(userInfo)
      console.log(userInfo);
    } catch (error) {
      console.log('Error Message___', error.message);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('User Cancelled the Login Flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Signin In')
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Play Services Not Available');
      } else {
        console.log('Some other Error Happened');
      }
    }
  };

  const isSignedIn = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn()
    if (!!isSignedIn) {
      getCurrentUserInfo()
    } else {
      console.log('Please Login')
    }
  }

  const getCurrentUserInfo = async () => {
    try {
      const userInfo = await GoogleSignin.signInSilently();
      console.log('edit__', user);
      setUserInfo(userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        alert('User has not signed in yet');
        console.log('User has not signed in yet');
      } else {
        alert('Something went wrong');
        console.log('Something went wrong');
      }
    }
  }

  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      setUserInfo({});
    } catch (error) {
      console.error(error);
    }
  }

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
        </View>
      </View>
      <GoogleSigninButton
        onPress={signIn}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        style={{width: '100%', height: 48}}
      />
      
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
