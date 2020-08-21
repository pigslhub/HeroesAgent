import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {withTheme, Card, TextInput, Button} from 'react-native-paper';
import {withNavigation} from 'react-navigation';
import NavbarWithBackButton from '../../components/navbars/NavbarWithBackButton';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ImagePicker from 'react-native-image-picker';
import RNFetchBlob from 'react-native-fetch-blob';
import {AlertMsg} from '../../helpers/MyAlert';
const DriverRegistration = ({navigation, theme}) => {
  // const {colors} = theme;
  const [signupLoading, setSignupLoading] = useState(false);
  const [name, setName] = useState('imran');
  const [email, setEmail] = useState('driver@system.com');
  const [password, setPassword] = useState('password');
  const [phone, setPhone] = useState('923136476240');
  const [txtDriverImage, setTextDriverimage] = useState('Upload Driver Image');
  const [driverImagePath, setDriverImagePath] = useState('');
  const [txtDriverLicenseImage, setTextDriverLicenseImage] = useState(
    'Upload Driver License',
  );
  const [driverLicensePath, setDriverLicensePath] = useState('');
  const [txtDriverIdImage, setTextDriverIdImage] = useState('Upload Driver ID');
  const [driverIDPath, setDriverIDPath] = useState('');
  const [txtDriverPlateImage, setTextDriverPlateImage] = useState(
    'Upload Number Plate',
  );
  const [driverPlatePath, setDriverPlatePath] = useState('');
  const [imagesType, setImagesTypes] = useState('');
  const [imagesName, setImagesName] = useState('');
  const [registerBtnText, setRegisterBtnText] = useState('Register');

  const options = {
    title: 'Select',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  const getDriverImagePath = (imagePath) => {
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        setTextDriverimage('Upload Driver Image ( Selected )');
        if (Platform.OS === 'ios') {
          setDriverImagePath(response.uri.replace('file://', ''));
        } else {
          setDriverImagePath(response.path);
        }
        setImagesTypes(response.type);
        setImagesName(response.fileName);
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
      }
    });
  };

  const getDriverLicensePath = (imagePath) => {
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        setTextDriverLicenseImage('Upload Driver License ( Selected )');
        if (Platform.OS === 'ios') {
          setDriverLicensePath(response.uri.replace('file://', ''));
        } else {
          setDriverLicensePath(response.path);
        }

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
      }
    });
  };
  const getDriverIdPath = (imagePath) => {
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        setTextDriverIdImage('Upload Driver ID ( Selected )');
        if (Platform.OS === 'ios') {
          setDriverIDPath(response.uri.replace('file://', ''));
        } else {
          setDriverIDPath(response.path);
        }
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
      }
    });
  };
  const getDriverNumberPlatePath = (imagePath) => {
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        setTextDriverPlateImage('Upload Number Plate ( Selected )');
        if (Platform.OS === 'ios') {
          setDriverPlatePath(response.uri.replace('file://', ''));
        } else {
          setDriverPlatePath(response.path);
        }
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
      }
    });
  };

  const driverSignup = () => {
    RNFetchBlob.fetch(
      'POST',
      'https://www.heroesksa.com/api/driver/register',
      {
        Accept: 'Application/json',
        'Content-Type': 'multipart/form-data',
      },
      [
        {name: 'name', data: name + ''},
        {name: 'email', data: email + ''},
        {name: 'password', data: password + ''},
        {name: 'phone', data: phone + ''},
        {
          name: 'image',
          filename: imagesName + 'driverImage',
          type: imagesType,
          data: RNFetchBlob.wrap(driverImagePath),
        },
        {
          name: 'licence',
          filename: imagesName + 'license',
          type: imagesType,
          data: RNFetchBlob.wrap(driverLicensePath),
        },
        {
          name: 'id_card',
          filename: imagesName + 'id_card',
          type: imagesType,
          data: RNFetchBlob.wrap(driverIDPath),
        },
        {
          name: 'number_plate',
          filename: imagesName + 'number_plate',
          type: imagesType,
          data: RNFetchBlob.wrap(driverPlatePath),
        },
      ],
    )
      .uploadProgress((written, total) => {
        console.log('uploaded ' + (written / total).toFixed(1));
        setRegisterBtnText(
          `Registration ${(written / total).toFixed(1) * 100} %`,
        );
      })
      .then((resp) => resp.json())
      .then((resp) => {
        if (resp.hasOwnProperty('reg')) {
          if (resp.reg === 'yes') {
            AlertMsg('Congrats!', 'You are registered and under review.');
          } else {
            AlertMsg('Oops!', 'Not registered.');
          }
        }

        setSignupLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setSignupLoading(false);
      });
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
            value={name}
            onChangeText={(text) => {
              setName(text);
            }}
            style={styles.textinputStyle}
          />
          <TextInput
            label="Driver Email"
            mode="outlined"
            value={email}
            onChangeText={(text) => {
              setEmail(text);
            }}
            style={styles.textinputStyle}
          />
          <TextInput
            label="Password"
            mode="outlined"
            value={password}
            onChangeText={(text) => {
              setPassword(text);
            }}
            secureTextEntry={true}
            style={styles.textinputStyle}
          />

          <TextInput
            label="Driver Phone"
            mode="outlined"
            value={phone}
            onChangeText={(text) => {
              setPhone(text);
            }}
            style={styles.textinputStyle}
          />

          <TouchableOpacity
            onPress={() => {
              getDriverImagePath();
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
              getDriverLicensePath();
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
              getDriverIdPath();
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
              getDriverNumberPlatePath();
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

          <Button
            mode="contained"
            loading={signupLoading}
            onPress={() => {
              setSignupLoading(true);
              if (name === '') {
                AlertMsg('Important!', 'Name Required', null);
                setSignupLoading(false);
              } else if (email === '') {
                AlertMsg('Important!', 'Email Required', null);
                setSignupLoading(false);
              } else if (password === '') {
                AlertMsg('Important!', 'Password Required', null);
                setSignupLoading(false);
              } else if (phone === '') {
                AlertMsg('Important!', 'Phone Required', null);
                setSignupLoading(false);
              } else if (driverImagePath === '') {
                AlertMsg('Important!', 'Driver Image Required', null);
                setSignupLoading(false);
              } else if (driverLicensePath === '') {
                AlertMsg('Important!', 'Driver License Required', null);
                setSignupLoading(false);
              } else if (driverIDPath === '') {
                AlertMsg('Important!', 'Driver ID Required', null);
                setSignupLoading(false);
              } else if (driverPlatePath === '') {
                AlertMsg('Important!', 'Number Plate Required', null);
                setSignupLoading(false);
              } else {
                driverSignup();
              }
            }}
            style={styles.buttonStyle}>
            {registerBtnText}
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
