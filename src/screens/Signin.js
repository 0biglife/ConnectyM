import React, { useContext, useState, useRef, useEffect } from 'react';
import styled from 'styled-components/native';
import { ThemeContext } from 'styled-components/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button, Image, Input } from '../components';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import {
	GoogleSignin,
	GoogleSigninButton,
	statusCodes,
} from '@react-native-community/google-signin';

const Container = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
	background-color: ${({ theme }) => theme.background};
	padding: 0 20px;
	padding-top: ${({ insets: { top } }) => top}px;
	padding-bottom: ${({ insets: { bottom } }) => bottom}px;
`;

const LOGO =
	'https://upload.wikimedia.org/wikipedia/commons/3/33/Vanamo_Logo.png';

GoogleSignin.configure({
	webClientId:
		'21966285335-pd59r4mk54v02nd8v5k2kem3gt1th3fl.apps.googleusercontent.com',
	offlineAccess: true,
	forceCodeForRefreshToken: true,
});

const Signin = ({ navigation }) => {
	const insets = useSafeAreaInsets();
	const theme = useContext(ThemeContext);

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const refPassword = useRef(null);

	const _handleSigninBtnPress = () => {
		console.log('Signin');
	};

	const [user, setUser] = useState({});

	useEffect(() => {
		isSignedIn();
	}, []);

	const signin = async () => {
		try {
			await GoogleSignin.hasPlayServices();
			const userInfo = await GoogleSignin.signIn();
			console.log('due : ', useInfo);
			setUser(userInfo);
		} catch (error) {
			console.log('Message : ', error.Message);
			if (error.code === statusCodes.SIGN_IN_CANCELLED) {
				console.log('User Cancelled the Login Flow');
			} else if (error.code === statusCodes.IN_PROGRESS) {
				console.log('Signing In');
			} else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
				console.log('Play Services Not Available');
			} else {
				console.log('Some other Error Happened');
			}
		}
	};

	const isSignedIn = async () => {
		const isSignedIn = await GoogleSignin.isSignedIn();
		if (!!isSignedIn) {
			getCurrentUserInfo();
		} else {
			console.log('Please Login');
		}
	};

	const getCurrentUserInfo = async () => {
		try {
			const userInfo = await GoogleSignin.signInSilently();
			console.log('edit : ', user);
			setUser(useInfo);
		} catch (error) {
			if (error.code === statusCodes.SIGN_IN_REQUIRED) {
				alert('User has not signed in yet');
			} else {
				alert('Something went wrong');
				console.log('Something went wrong');
			}
		}
	};

	const signedOut = async () => {
		try {
			await GoogleSignin.revokeAccess();
			await GoogleSignin.signOut();
			setUser();
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<KeyboardAwareScrollView
			extraScrollHeight={20}
			contentContainerStyle={{ flex: 1 }}
		>
			<Container insets={insets}>
				<Image url={LOGO} />
				{/* <Input
						label="Eamil"
						placeholder="Email"
						returnKeyType="next"
						value={email}
						onChangeText={setEmail}
						onSubmitEditing={() => refPassword.current.focus()}
					/>
					<Input
						ref={refPassword}
						label="Password"
						placeholder="Password"
						returnKeyType="done"
						value={password}
						onChangeText={setPassword}
						isPassword={true}
						onSubmitEditing={_handleSigninBtnPress}
					/>
					<Button title="Sign in" onPress={_handleSigninBtnPress} /> */}
				
				<GoogleSigninButton
					style={{ width: 192, height: 48 }}
					size={GoogleSigninButton.Size.Wide}
					color={GoogleSigninButton.Color.Dark}
					onPress={signin}
				/>
				<Button
					title="Google Button"
					onPress={signin}
					containerStyle={{ marginTop: 10,backgroundColor: 'white' }}
					textStyle={{ color: theme.btnTextLink, fontSize: 18}}
				/>
				<Button
					title="or sign up"
					onPress={() => navigation.navigate('Signup')}
					containerStyle={{ marginTop: 0, backgroundColor: 'transparent' }}
					textStyle={{ color: theme.btnTextLink, fontSize: 18 }}
				/>
			</Container>
		</KeyboardAwareScrollView>
	);
};

export default Signin;
