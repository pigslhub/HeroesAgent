import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {withTheme, Card} from 'react-native-paper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import DefaultNavbar from '../components/navbars/DefaultNavbar';

const Login = ({theme}) => {
  const {colors} = theme;
  return (
    <View>
      <DefaultNavbar />
      <Image
        source={require('../assets/logo.png')}
        style={{width: wp('100'), height: 100}}
      />
    </View>
  );
};
export default withTheme(Login);
