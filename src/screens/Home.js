import React from 'react';
import {View, Text, StyleSheet, Image,TouchableOpacity,ScrollView} from 'react-native';
import {withTheme, Card, Title, Paragraph} from 'react-native-paper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import DefaultNavbar from '../components/navbars/DefaultNavbar';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const Home = ({theme,navigation}) => {
  const {colors} = theme;
  return (
    <View style={{flex:1}}>
    <ScrollView showsVerticalScrollIndicator={false}>
      <TouchableOpacity onPress={()=>{navigation.navigate('Driver')}}>
      <Card
        style={{
          marginHorizontal: wp('10'),
          marginTop:hp('12'),
          elevation: wp('1'),
          borderRadius: wp('2'),
          height: hp('30'),
          
          
        }}>
        <MaterialIcons name='drive-eta' size={wp('20')} style={{marginVertical:wp('8'),alignSelf:'center'}} />
        <Text style={{fontSize:wp('6'),fontWeight:'bold',alignSelf:'center',color:colors.black}}>Driver</Text>
      </Card>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{navigation.navigate('Shops')}}>
      <Card
        style={{
          marginHorizontal: wp('10'),
          marginTop: hp('12'),
          elevation: wp('1'),
          borderRadius: wp('2'),
          height: hp('30'),
          alignItems:'center',
          marginBottom:hp('5')
         
        }}>
        <Fontisto name='shopping-store' size={wp('20')} style={{marginVertical:wp('8'),alignSelf:'center'}}/>
        <Text style={{fontSize:wp('6'),fontWeight:'bold',alignSelf:'center',color:colors.black}}>Shops</Text>
      </Card>
      </TouchableOpacity>
    </ScrollView>
    </View>
  );
};

export default withTheme(Home);
