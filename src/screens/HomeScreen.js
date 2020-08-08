import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {withTheme} from 'react-native-paper';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const HomeScreen = () => {
    const {colors} =theme;
    return(
        <View>
            <Text>
                Home Screen
            </Text>
        </View>
    )
}
export default HomeScreen;