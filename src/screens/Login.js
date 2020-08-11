import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {withTheme, Card} from 'react-native-paper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import DefaultNavbar from '../components/navbars/DefaultNavbar';
import TabNAvComponent from '../components/TabBar/TabNavComponent';

const Login = ({theme}) => {
  const {colors} = theme;
  return (
    <View style={{flex:2}}>
      <View style={{flex:1}}>
      <DefaultNavbar />
      <Image
        source={require('../assets/logo.png')}
        style={{width: wp('100'), height: 100}}
      />
      </View>
      <View>
      <TabNAvComponent/>
      </View>
    </View>
  );
};
export default withTheme(Login);
