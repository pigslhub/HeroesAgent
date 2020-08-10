import * as React from 'react';
import {Appbar, withTheme} from 'react-native-paper';
import {StyleSheet, Text} from 'react-native';
import {name as appName} from '../../../app.json';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
const DefaultNavbar = ({theme}) => {
  const {colors} = theme;
  return (
    <Appbar style={{backgroundColor: colors.black, justifyContent: 'center'}}>
      <Text
        style={{
          color: colors.white,
          fontWeight: 'bold',
          fontSize: wp('4'),
        }}>
        {appName}
      </Text>
    </Appbar>
  );
};

export default withTheme(DefaultNavbar);
