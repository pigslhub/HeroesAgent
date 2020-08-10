import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Provider as PaperProvider} from 'react-native-paper';
import Login from './src/screens/Login';
import Home from './src/screens/Home';

const AppNavigator = createStackNavigator(
  {
    Login: Login,
    Home: Home,
  },
  {
    initialRouteName: 'Home',
    headerMode: false,
  },
);
const AppContainer = createAppContainer(AppNavigator);
const App = () => {
  const theme = {
    roundness: 3,
    colors: {
      black: '#1B1B1B',
      white: '#FFFFFFFF',
    },
  };
  return (
    <PaperProvider theme={theme}>
      <AppContainer />
    </PaperProvider>
  );
};
export default App;
