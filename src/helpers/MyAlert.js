import {Alert} from 'react-native';
export function AlertMsg(title, msg, callback) {
  Alert.alert(
    `${title}`,
    `${msg}`,
    [
      {
        text: 'Cancel',
        onPress: () =>
          callback != null ? callback : console.log('No Call back'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ],
    {cancelable: false},
  );
}
