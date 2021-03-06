import React, {useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {withTheme, Card, Title, Paragraph} from 'react-native-paper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import DefaultNavbar from '../components/navbars/DefaultNavbar';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-community/async-storage';
import AppContext from '../context/AppContext';

const Home = ({theme, navigation}) => {
  const {colors} = theme;
  const {storeUserId, storeToken, storePhone, storeUserEmail} = useContext(
    AppContext,
  );
  const isDriverEmpExist = async () => {
    console.log('hello');
    try {
      const idAlreadyExist = await AsyncStorage.getItem('duserid');
      const emailAlreadyExist = await AsyncStorage.getItem('demail');
      const passwordAlreadyExist = await AsyncStorage.getItem('dpassword');
      const tokenAlreadyExist = await AsyncStorage.getItem('dtoken');
      const loginAlreadyExist = await AsyncStorage.getItem('dlogin');
      const phoneAlreadyExist = await AsyncStorage.getItem('dphone');

      if (loginAlreadyExist !== null) {
        if (loginAlreadyExist == '1') {
          console.log('reach');
          storeUserId(idAlreadyExist);
          storeToken(tokenAlreadyExist);
          storePhone(phoneAlreadyExist);
          storeUserEmail(emailAlreadyExist);
          navigation.navigate('DriverDashboard');
        } else {
          console.log('noreach');
          navigation.navigate('DriverLogin');
        }
        // value previously stored
      } else {
        navigation.navigate('DriverLogin');
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <View style={{flex: 1}}>
      <DefaultNavbar />
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          onPress={() => {
            isDriverEmpExist();
          }}>
          <Card
            style={{
              marginHorizontal: wp('10'),
              marginVertical: hp('4'),
              elevation: wp('1'),
              borderRadius: wp('2'),
              height: hp('30'),
            }}>
            <MaterialIcons
              name="drive-eta"
              size={wp('20')}
              style={{marginVertical: wp('8'), alignSelf: 'center'}}
            />
            <Text
              style={{
                fontSize: wp('6'),
                fontWeight: 'bold',
                alignSelf: 'center',
                color: colors.black,
              }}>
              Driver / Employee
            </Text>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ShopsLogin');
          }}>
          <Card
            style={{
              marginHorizontal: wp('10'),
              marginVertical: hp('4'),
              elevation: wp('1'),
              borderRadius: wp('2'),
              height: hp('30'),
              alignItems: 'center',
              // marginBottom: hp('5'),
            }}>
            <Fontisto
              name="shopping-store"
              size={wp('20')}
              style={{marginVertical: wp('8'), alignSelf: 'center'}}
            />
            <Text
              style={{
                fontSize: wp('6'),
                fontWeight: 'bold',
                alignSelf: 'center',
                color: colors.black,
              }}>
              Shops
            </Text>
          </Card>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default withTheme(Home);
