import React, {useState, useContext, useEffect} from 'react';
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
import AppContext from '../../context/AppContext';
import {Select, Option} from 'react-native-select-lists';

const ShopRegistration = ({navigation, theme}) => {
  // const {colors} = theme;
  const {baseUrl} = useContext(AppContext);
  const [signupLoading, setSignupLoading] = useState(false);
  const [name, setName] = useState('Shop');
  const [email, setEmail] = useState('Shop@system.com');
  const [password, setPassword] = useState('password');
  const [shopType, setShopType] = useState(0);
  const [txtShopImage, setTextShopimage] = useState('Upload Shop Image');
  const [ShopImagePath, setShopImagePath] = useState('');

  const [txtShopCrImage, setTextShopCrImage] = useState(
    'Upload Commercial Registration Letter',
  );
  const [ShopCrPath, setShopCrPath] = useState('');

  const [imagesType, setImagesTypes] = useState('');
  const [imagesName, setImagesName] = useState('');
  const [allShopTypes, setAllShopTypes] = useState([{id: 0, value: ''}]);
  const [registerBtnText, setRegisterBtnText] = useState('Register');

  const options = {
    title: 'Select',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  const getShopImagePath = (imagePath) => {
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        setTextShopimage('Upload Shop Image ( Selected )');
        if (Platform.OS === 'ios') {
          setShopImagePath(response.uri.replace('file://', ''));
        } else {
          setShopImagePath(response.path);
        }
        setImagesTypes(response.type);
        setImagesName(response.fileName);
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
      }
    });
  };

  const getShopCrPath = (imagePath) => {
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        setTextShopCrImage('Upload Shop Cr ( Selected )');
        if (Platform.OS === 'ios') {
          setShopCrPath(response.uri.replace('file://', ''));
        } else {
          setShopCrPath(response.path);
        }

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
      }
    });
  };

  const ShopSignup = () => {
    RNFetchBlob.fetch(
      'POST',
      `${baseUrl}/api/shop/register`,
      {
        Accept: 'Application/json',
        'Content-Type': 'multipart/form-data',
      },
      [
        {name: 'name', data: name + ''},
        {name: 'email', data: email + ''},
        {name: 'password', data: password + ''},
        {name: 'shop_type_id', data: shopType + ''},
        {
          name: 'avatar',
          filename: imagesName + 'ShopImage',
          type: imagesType,
          data: RNFetchBlob.wrap(ShopImagePath),
        },
        {
          name: 'cr',
          filename: imagesName + 'Cr',
          type: imagesType,
          data: RNFetchBlob.wrap(ShopCrPath),
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
        console.log(resp);
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

  const getShopTypes = () => {
    RNFetchBlob.fetch('GET', `${baseUrl}/api/shop_types`, {
      Accept: 'Application/json',
      'Content-Type': 'multipart/form-data',
    })
      .then((resp) => resp.json())
      .then((resp) => {
        console.log(resp);
        setAllShopTypes(resp.shop_types);
      })
      .catch((err) => {
        console.log(err);
        setSignupLoading(false);
      });
  };

  useEffect(() => {
    getShopTypes();
  }, []);

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
            Shop Registration
          </Text>
          <TextInput
            label="Shop Name"
            mode="outlined"
            value={name}
            onChangeText={(text) => {
              setName(text);
            }}
            style={styles.textinputStyle}
          />
          <TextInput
            label="Shop Email"
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
          <Text style={{marginHorizontal: 18, marginVertical: 5}}>
            Select Shop Type
          </Text>
          <Select
            selectStyle={{
              height: 60,
              marginHorizontal: 18,
              borderWidth: 1,
              borderColor: '#000',
              backgroundColor: '#FFFFFF',
            }}
            onSelect={(value) => {
              setShopType(value);
              console.log(value);
            }}
            caret="down"
            caretColor="#000">
            {allShopTypes.map((item) => {
              if (item.id === 1) {
              } else {
                return (
                  <Option key={item.id} value={item.id}>
                    {item.type}
                  </Option>
                );
              }
            })}
          </Select>

          <TouchableOpacity
            onPress={() => {
              getShopImagePath();
            }}
            style={{marginHorizontal: wp('10'), marginVertical: wp('3')}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <MaterialCommunityIcons
                name="upload"
                size={wp('7')}
                color="#1B1B1B"
              />
              <Text style={{fontWeight: 'bold', marginRight: 10}}>
                {txtShopImage}
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              getShopCrPath();
            }}
            style={{marginHorizontal: wp('10'), marginVertical: wp('3')}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <MaterialCommunityIcons
                name="upload"
                size={wp('7')}
                color="#1B1B1B"
              />
              <Text style={{fontWeight: 'bold', marginRight: 10}}>
                {txtShopCrImage}
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
              } else if (ShopImagePath === '') {
                AlertMsg('Important!', 'Shop Image Required', null);
                setSignupLoading(false);
              } else if (ShopCrPath === '') {
                AlertMsg('Important!', 'Shop Cr Required', null);
                setSignupLoading(false);
              } else if (shopType === 0) {
                AlertMsg('Important!', 'Select Shop type', null);
              } else {
                ShopSignup();
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
export default withNavigation(ShopRegistration);
