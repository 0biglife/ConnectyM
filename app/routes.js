import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//Screens
import AuthComponent from './components/auth';
// import Home from './components/Home';
// import HomeView from './components/Home/homeView';
import {HomeView} from './screens/Home';
import Search from './screens/Search';

//Icons
import Icon from 'react-native-vector-icons/Ionicons';

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

// const TabBarIcon = (focused, name) => {
//   let iconName, iconSize;
//   if (name === 'Home') {
//     iconName = 'home';
//   } else if (name === 'Search') {
//     iconName = 'search';
//   }

//   return <Icon name={iconName} size={iconSize} color="#fff" />;
// };

const HomeStackComponent = () => {
  return (
    <HomeStack.Navigator>
      {/* <HomeStack.Screen name="Home" component={Home} /> */}
      <HomeStack.Screen name="HomeView" component={HomeView} />
    </HomeStack.Navigator>
  );
};

const SearchStackComponent = () => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name="Search" component={Search} />
    </SearchStack.Navigator>
  );
};

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
        }
        return <Icon name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      showLabel: false,
      activeTintColor: 'black',
      inactiveTintColor: 'gray',
    }}>
    <MainScreenTab.Screen name="Home" component={HomeView} />
    <MainScreenTab.Screen name="Search" component={Search} />
  </MainScreenTab.Navigator>
);

export const RootNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      {isLoggedIn ? (
        <AuthStack.Screen name="Main" component={AppTabComponent} />
      ) : (
        <>
          <AuthStack.Screen name="SignIn" component={AuthComponent} />
          <AuthStack.Screen
            name="AppTabComponent"
            component={AppTabComponent}
          />
        </>
      )}
    </AuthStack.Navigator>
  );
};
