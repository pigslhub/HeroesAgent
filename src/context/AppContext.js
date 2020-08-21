import React, {useState, useEffect} from 'react';
import {Text, StyleSheet} from 'react-native';

const AppContext = React.createContext();

export const AppProvider = ({children}) => {
  const [baseUrl, setBaseUrl] = useState('https://www.heroesksa.com');
  // const [baseUrl, setBaseUrl] = useState('http://127.0.0.1:8000');
  const [userid, setUserId] = useState('');
  const [token, setToken] = useState('');
  const [phone, setPhone] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const storeUserId = (userid) => {
    setUserId(userid);
  };
  const storeToken = (token) => {
    setToken(token);
  };
  const storePhone = (phone) => {
    setPhone(phone);
  };
  const storeUserEmail = (email) => {
    setUserEmail(email);
  };

  return (
    <AppContext.Provider
      value={{
        baseUrl,
        userid,
        token,
        phone,
        userEmail,
        storeUserId,
        storeToken,
        storePhone,
        storeUserEmail,
      }}>
      {children}
    </AppContext.Provider>
  );
};
export default AppContext;
