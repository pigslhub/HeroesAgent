import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import Home from './src/screens/Home';
import {AppProvider} from './src/context/AppContext';
import DriverRegistration from './src/screens/driver/DriverRegistration';
import DriverLogin from './src/screens/driver/DriverLogin';
import ShopsLogin from './src/screens/shops/ShopsLogin';
import ShopsRegistration from './src/screens/shops/ShopsRegistration';
import DriverDashboard from './src/screens/driver/DriverDashboard';
import ShopDashboard from './src/screens/shops/ShopDashboard';

const AppNavigator = createStackNavigator(
  {
    Home: Home,
    DriverRegistration: DriverRegistration,
    DriverLogin: DriverLogin,
    DriverDashboard: DriverDashboard,
    ShopsLogin: ShopsLogin,
    ShopsRegistration: ShopsRegistration,
    ShopsDashboard: ShopDashboard,
  },
  {
    initialRouteName: 'Home',
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
      white: '#FFFFFFFF',
      background: '#FFFFFFFF',
      primary: '#1B1B1B',
      secondary: '#FFFFFFFF',
    },
  };
  return (
    <AppProvider>
      <PaperProvider theme={theme}>
        <AppContainer />
      </PaperProvider>
    </AppProvider>
  );
};
export default App;
