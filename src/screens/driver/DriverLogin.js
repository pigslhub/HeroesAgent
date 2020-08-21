import React, {useState, useContext, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {withTheme, TextInput, Card, Button} from 'react-native-paper';
import {withNavigation} from 'react-navigation';
import NavbarWithBackButton from '../../components/navbars/NavbarWithBackButton';
import AppContext from '../../context/AppContext';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import {AlertMsg} from '../../helpers/MyAlert';
import {SelectCustomImage} from '../../helpers/ImageSelection';
import RNFetchBlob from 'react-native-fetch-blob';

const DriverLogin = ({navigation, theme}) => {
  const colors = {theme};
  const [email, setEmail] = useState('driver33@system.com');
  const [password, setPassword] = useState('password');
  const [signinLoading, setSigninLoading] = useState(false);
  const {
    baseUrl,
    storeUserId,
    storeToken,
    storePhone,
    storeUserEmail,
  } = useContext(AppContext);
  const storeData = async (
    userid,
    asyncEmail,
    asyncPassword,
    asyncToken,
    login,
    phone,
  ) => {
    try {
      await AsyncStorage.setItem('duserid', userid);
      await AsyncStorage.setItem('demail', asyncEmail);
      await AsyncStorage.setItem('dpassword', asyncPassword);
      await AsyncStorage.setItem('dtoken', asyncToken);
      await AsyncStorage.setItem('dlogin', login);
      await AsyncStorage.setItem('dphone', phone);
    } catch (e) {
      // saving error
    }
  };

  const driverLogin = (em, ps) => {
    RNFetchBlob.fetch(
      'POST',
      `${baseUrl}/api/driver/login`,
      {
        Accept: 'Application/json',
        'Content-Type': 'multipart/form-data',
      },
      [
        {name: 'email', data: em + ''},
        {name: 'password', data: ps + ''},
      ],
    )
      .then((response) => response.json())
      .then((response) => {
        if (response.hasOwnProperty('error')) {
          setSigninLoading(false);
          AlertMsg('Oops!', 'You are unauthroized', null);
        } else {
          storeData(
            response.customer.id + '',
            em,
            ps,
            response.access_token,
            '1',
            response.customer.phone,
          );
          setSigninLoading(false);
          navigation.navigate('DriverDashboard');
          console.log(response);
        }
      })
      .catch((err) => {
        console.log(err);
        setSigninLoading(false);
      });
  };

  return (
    <View style={{flex: 1}}>
      <NavbarWithBackButton />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Card
          style={{
            marginHorizontal: wp('4'),
            elevation: wp('2'),
            height: hp('43'),
            width: wp('92'),
            marginVertical: hp('15'),
            borderRadius: wp('1'),
          }}>
          <Text
            style={{
              fontSize: hp('5'),
              fontWeight: 'bold',
              alignSelf: 'center',
              marginVertical: hp('2'),
            }}>
            Driver Login
          </Text>
          <TextInput
            onChangeText={(text) => {
              setEmail(text);
            }}
            label="Driver Email"
            mode="outlined"
            value={email}
            style={styles.textinputStyle}
          />
          <TextInput
            onChangeText={(pass) => {
              setPassword(pass);
            }}
            label="Password"
            mode="outlined"
            secureTextEntry={true}
            value={password}
            style={styles.textinputStyle}
          />
          <Button
            mode="contained"
            loading={signinLoading}
            onPress={() => {
              setSigninLoading(true);
              if (email == '') {
                AlertMsg('Important!', 'Email Required', null);
              } else if (password == '') {
                AlertMsg('Important!', 'Password Required', null);
              } else {
                driverLogin(email, password);
              }
            }}
            style={styles.buttonStyle}>
            {' '}
            Login{' '}
          </Button>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('DriverRegistration');
            }}>
            <Text
              style={{color: colors.black, textAlign: 'center', marginTop: 20}}>
              Don't have account ? Signin
            </Text>
          </TouchableOpacity>
        </Card>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  textinputStyle: {
    marginHorizontal: wp('4'),
    marginVertical: hp('1'),
    height: hp('7'),
    fontSize: hp('2'),
  },
  buttonStyle: {
    marginHorizontal: wp('4'),
    marginVertical: hp('1'),
  },
});
export default withNavigation(DriverLogin);
