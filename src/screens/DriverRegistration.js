import React, {useState} from 'react';
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
import {withTheme, Card, TextInput, Button} from 'react-native-paper';
import {withNavigation} from 'react-navigation';
import NavbarWithBackButton from '../components/navbars/NavbarWithBackButton';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {SelectCustomImage} from '../helpers/ImageSelection';
const DriverRegistration = ({navigation, theme}) => {
  // const {colors} = theme;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [txtDriverImage, setTextDriverimage] = useState('Upload Driver Image');
  const [txtDriverLicenseImage, setTextDriverLicenseImage] = useState(
    'Upload Driver License',
  );
  const [txtDriverIdImage, setTextDriverIdImage] = useState('Upload Driver ID');
  const [txtDriverPlateImage, setTextDriverPlateImage] = useState(
    'Upload Number Plate',
  );

  const getDriverImagePath = (imagePath) => {
    setTextDriverimage(imagePath);
  };
  const getDriverLicensePath = (imagePath) => {
    setTextDriverLicenseImage(imagePath);
  };
  const getDriverIdPath = (imagePath) => {
    setTextDriverIdImage(imagePath);
  };
  const getDriverNumberPlatePath = (imagePath) => {
    setTextDriverPlateImage(imagePath);
  };

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
            Driver Registration
          </Text>
          <TextInput
            label="Driver Name"
            mode="outlined"
            style={styles.textinputStyle}
          />
          <TextInput
            label="Driver Email"
            mode="outlined"
            style={styles.textinputStyle}
          />
          <TextInput
            label="Password"
            mode="outlined"
            style={styles.textinputStyle}
          />

          <TextInput
            label="Driver Phone"
            mode="outlined"
            style={styles.textinputStyle}
          />

          <TouchableOpacity
            onPress={() => {
              SelectCustomImage(getDriverImagePath);
            }}
            style={{marginHorizontal: wp('10'), marginVertical: wp('3')}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <MaterialCommunityIcons
                name="upload"
                size={wp('7')}
                color="#1B1B1B"
              />
              <Text style={{fontWeight: 'bold', marginRight: 10}}>
                {txtDriverImage}
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              const source = SelectCustomImage();
              console.log(`Source : ${source}`);
            }}
            style={{marginHorizontal: wp('10'), marginVertical: wp('3')}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <MaterialCommunityIcons
                name="upload"
                size={wp('7')}
                color="#1B1B1B"
              />
              <Text style={{fontWeight: 'bold', marginRight: 10}}>
                {txtDriverLicenseImage}
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              const source = SelectCustomImage();
              console.log(`Source : ${source}`);
            }}
            style={{marginHorizontal: wp('10'), marginVertical: wp('3')}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <MaterialCommunityIcons
                name="upload"
                size={wp('7')}
                color="#1B1B1B"
              />
              <Text style={{fontWeight: 'bold', marginRight: 10}}>
                {txtDriverIdImage}
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              const source = SelectCustomImage();
              console.log(`Source : ${source}`);
            }}
            style={{marginHorizontal: wp('10'), marginVertical: wp('3')}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <MaterialCommunityIcons
                name="upload"
                size={wp('7')}
                color="#1B1B1B"
              />
              <Text style={{fontWeight: 'bold', marginRight: 10}}>
                {txtDriverPlateImage}
              </Text>
            </View>
          </TouchableOpacity>

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
    marginHorizontal: wp('4'),
    marginVertical: hp('1'),
  },
});
export default withNavigation(DriverRegistration);
