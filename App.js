import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {DefaultTheme,Provider as PaperProvider} from 'react-native-paper';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import Driver from './src/screens/Driver';
import Shops from './src/screens/Shops';
import DriverRegistration from './src/screens/DriverRegistration';
import DriverLogin from './src/screens/DriverLogin';
import ShopsLogin from './src/screens/ShopsLogin';
import ShopsRegistration from './src/screens/ShopsRegistration';

const AppNavigator = createStackNavigator(
  {
    Login: Login,
    Home: Home,
    Driver: Driver,
    DriverRegistration: DriverRegistration,
    DriverLogin: DriverLogin, 
    Shops: Shops,
    ShopsLogin: ShopsLogin,
    ShopsRegistration: ShopsRegistration
  },
  {
    initialRouteName: 'Login',
    headerMode: false,
  },
);
const AppContainer = createAppContainer(AppNavigator);
const App = () => {
  const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      black: '#1B1B1B',
      // white: '#FFFFFFFF',
      background: '#FFFFFFFF',
      primary: '#1B1B1B',
      secondary:'#FFFFFFFF'
    },
  };
  return (
    <PaperProvider theme={theme}>
      <AppContainer />
    </PaperProvider>
  );
};
export default App;
