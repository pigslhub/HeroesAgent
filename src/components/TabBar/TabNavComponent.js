import React from 'react';
import {TouchableOpacity ,View, Text, StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SquareComponent from './SquareComponent';

const TabNAvComponent =()=>{

    return(
        <View>
            <ScrollView horizontal ={true}
            showsHorizontalScrollIndicator={false}>
            <SquareComponent name ="home"/>
            <SquareComponent name ="phone"/>
            <SquareComponent name ="cogs"/>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({

})
export default TabNAvComponent;