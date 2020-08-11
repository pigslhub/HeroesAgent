import React from 'react';
import {View,Text,ScrollView} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  import {withTheme} from 'react-native-paper';
  import {withNavigation} from 'react-navigation';

  const Shops = ({navigation}) => {
      return(
          <View>
              <Text>shops</Text>
          </View>
      )
  }
  export default withNavigation(Shops);