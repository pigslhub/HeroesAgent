import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {withTheme, Card, TextInput, Button} from 'react-native-paper';
import {withNavigation} from 'react-navigation';
import NavbarWithBackButton from '../components/navbars/NavbarWithBackButton';

const ShopsRegistration = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <NavbarWithBackButton />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Card
          style={{
            marginHorizontal: wp('4'),
            marginVertical: hp('6'),
            elevation: wp('2'),
          }}>
          <Text
            style={{
              fontSize: hp('5'),
              fontWeight: 'bold',
              alignSelf: 'center',
              marginVertical: hp('2'),
            }}>
            Shops Registration
          </Text>
          <TextInput
            label="Shop Name"
            mode="outlined"
            style={styles.textinputStyle}
          />
          <TextInput
            label="Owner Name"
            mode="outlined"
            style={styles.textinputStyle}
          />
          <TextInput
            label="Email"
            mode="outlined"
            style={styles.textinputStyle}
          />
          <TextInput
            label="Password"
            mode="outlined"
            style={styles.textinputStyle}
          />
          <TextInput
            label="Shop Address"
            mode="outlined"
            style={styles.textinputStyle}
          />
          <TextInput
            label="Shop Phone"
            mode="outlined"
            style={styles.textinputStyle}
          />
          <TextInput
            label="Shop Area code"
            mode="outlined"
            style={styles.textinputStyle}
          />
          <TextInput
            label="Country"
            mode="outlined"
            style={styles.textinputStyle}
          />
          <TextInput
            label="Enter Shop Commission"
            mode="outlined"
            style={styles.textinputStyle}
          />
          <Button mode="contained" style={styles.buttonStyle}>
            {' '}
            Shop Image{' '}
          </Button>
          <Button mode="contained" style={styles.buttonStyle}>
            {' '}
            Register{' '}
          </Button>
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
    borderRadius: wp('3'),
    marginHorizontal: wp('4'),
    marginVertical: hp('1'),
    height: hp('6'),
    alignItems: 'center',
  },
});
export default withNavigation(ShopsRegistration);
