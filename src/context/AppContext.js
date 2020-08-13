import React, {useState, useEffect} from 'react';
import {Text, StyleSheet} from 'react-native';

const AppContext = React.createContext();

export const AppProvider = ({children}) => {
  const [baseUrl, setBaseUrl] = useState('https://www.heroesksa.com');

  return (
    <AppContext.Provider
      value={{
        baseUrl,
      }}>
      {children}
    </AppContext.Provider>
  );
};
export default AppContext;
