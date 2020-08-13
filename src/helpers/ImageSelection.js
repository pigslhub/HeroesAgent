import ImagePicker from 'react-native-image-picker';
const options = {
  title: 'Select Avatar',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};
export function SelectCustomImage(stateCallBack) {
  let source = '';
  ImagePicker.showImagePicker(options, (response) => {
    // console.log('Response = ', response);

    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
    } else {
      source = response.path;
      console.log(`path : ${source}`);
      console.log(response.uri);
      stateCallBack(response.path);
      // You can also display the image using data:
      // const source = { uri: 'data:image/jpeg;base64,' + response.data };
    }
  });

  return source;
}
