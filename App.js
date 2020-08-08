import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Provider as PaperProvider} from 'react-native-paper';
import HomeScreen from './src/screens/HomeScreen';


const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
   
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
