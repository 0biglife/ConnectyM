import React from 'react';
import Button from './components/Button';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//Screens
import AuthComponent from './components/auth';
// import Home from './components/Home';
// import HomeView from './components/Home/homeView';
import {LoginView} from './screens/Login';
import {HomeView} from './screens/Home';
import {SearchView} from './screens/Search';
import {MatchView} from './screens/Match';
import {PracticeView} from './screens/Practice';
import {ProfileView} from './screens/Profile';

//Icons
import IonIcon from 'react-native-vector-icons/Ionicons';
import FontistoIcon from 'react-native-vector-icons/Fontisto';


const AuthStack = createStackNavigator();
const MainScreenTab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();

// const headerConfig = {
//   headerTitleAlign: 'center',
//   headerTintColor: '#fff',
//   headerStyle: {
//     backgroundColor: '#7487C5',
//   },
//   // headerTitle: <Logo />,
//   headerTitleStyle: {
//     flex: 1,
//     textAlign: 'center',
//   },
// };

const isLoggedIn = false;

const AppTabComponent = () => (
  <MainScreenTab.Navigator
    initialRouteName="Home"
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Search') {
          iconName = 'search';
        } else if (route.name === 'Match') {
          iconName = 'people';
        } else if (route.name === 'Practice') {
          iconName = 'mic';
        } else if (route.name === 'Profile') {
          iconName = 'person';
        }
        return <IonIcon name={iconName} size={size} color={color} />;
      },
      headerTitleAlign: 'center',
    })}>
    <MainScreenTab.Screen
      name="Home"
      component={HomeView}
      options={{
        headerRight: () => <Button />,
      }}
    />
    <MainScreenTab.Screen name="Search" component={SearchView} />
    <MainScreenTab.Screen name="Match" component={MatchView} />
    <MainScreenTab.Screen name="Practice" component={PracticeView} />
    <MainScreenTab.Screen name="Profile" component={ProfileView} />
  </MainScreenTab.Navigator>
);



export const RootNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      {isLoggedIn ? (
        <AuthStack.Screen name="Main" component={AppTabComponent} />
      ) : (
        <>
          <AuthStack.Screen name="Login" component={LoginView} />
          <AuthStack.Screen
            name="AppTabComponent"
            component={AppTabComponent}
          />
        </>
      )}
    </AuthStack.Navigator>
  );
};
