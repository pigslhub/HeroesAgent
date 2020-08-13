import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {withTheme, TextInput, Card, Button} from 'react-native-paper';
import {withNavigation} from 'react-navigation';
import NavbarWithBackButton from '../components/navbars/NavbarWithBackButton';
import AppContext from '../context/AppContext';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import {AlertMsg} from '../helpers/MyAlert';
import {SelectCustomImage} from '../helpers/ImageSelection';

const DriverLogin = ({navigation, theme}) => {
  const colors = {theme};
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {baseUrl} = useContext(AppContext);

  const driverLogin = (em, ps) => {
    axios
      .post(`${baseUrl}/api/driver/login`, {
        email: em,
        password: ps,
      })
      .then(
        (response) => {
          console.log(response.data);
          storeData(em, ps, response.data.access_token);
        },
        (error) => {
          console.log(error);
        },
      );
  };

  const storeData = async (emailP, passwordP, token) => {
    try {
      await AsyncStorage.setItem('email', emailP);
      await AsyncStorage.setItem('password', passwordP);
      await AsyncStorage.setItem('token', token);
    } catch (e) {
      console.log(e);
    }
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
            onPress={() => {
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
              Don't have account ? Signup
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
export default DriverLogin;
