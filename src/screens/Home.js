import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {withTheme, Card, Title, Paragraph} from 'react-native-paper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import DefaultNavbar from '../components/navbars/DefaultNavbar';

const Home = ({theme}) => {
  const {colors} = theme;
  return (
    <View>
      <Card
        style={{
          marginHorizontal: wp('7'),
          marginVertical: hp('10'),
          elevation: 4,
          borderRadius: 10,
          height: hp('30'),
        }}>
        <Text>Home</Text>
      </Card>
    </View>
  );
};

export default withTheme(Home);
