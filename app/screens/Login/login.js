import React from 'react';
import {StyleSheet, View, Platform, Image} from 'react-native';
// import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Button from '../../components/Button';
import LogoImage from '../../assets/images/Connecty_logo.png';

const Login = ({navigation}) => {

  // const gotoHomeView = () => {
  //   navigation.navigator('AppTabComponent');
  // }

  return(
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
      </View>
  );
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

export default Login;
