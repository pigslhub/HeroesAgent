import * as React from 'react';
import {Appbar, withTheme} from 'react-native-paper';
import {StyleSheet, Text, View} from 'react-native';
import {name as appName} from '../../../app.json';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {withNavigation} from 'react-navigation';
const NavbarWithBackButton = ({theme, navigation}) => {
  const {colors} = theme;
  return (
    <Appbar
      style={{
        backgroundColor: colors.black,
        height: 100,
        paddingTop: 30,
      }}>
      <TouchableOpacity
        style={{marginLeft: 15}}
        onPress={() => {
          navigation.goBack();
        }}>
        <Icon name="arrow-left-box" size={32} color={colors.white} solid />
        {/* <FontAwesome name="menu" size={22} color={colors.white} /> */}
      </TouchableOpacity>
    </Appbar>
  );
};

export default withTheme(withNavigation(NavbarWithBackButton));
