import React,{useState} from 'react';
import {View,Text,ScrollView,StyleSheet} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  import {withTheme,TextInput,Card, Button} from 'react-native-paper';
  import {withNavigation} from 'react-navigation';
  import ImagePicker from 'react-native-image-picker';


  const ShopsLogin = ({navigation,theme}) => {
      const colors ={theme}
      
       
      return(
          <View style={{flex:1}}>
          <ScrollView showsVerticalScrollIndicator={false}>
            
            <Card style= {{marginHorizontal:wp('4'),elevation:wp('2'),height:hp('43'),width:wp('92'),marginVertical:hp('25'),borderRadius:wp('1')}}>
            <Text style={{fontSize:hp('5'),fontWeight:'bold',alignSelf:'center',marginVertical:hp('2')}}>Shops Login</Text>
            <TextInput label="Shop Email" mode='outlined' style={styles.textinputStyle} />
            <TextInput label="Password" mode='outlined' style={styles.textinputStyle}/>
            <Button mode='contained' style={styles.buttonStyle}> Login </Button>
            </Card>
        
          </ScrollView>
          </View>
      )
      }
  
  const styles= StyleSheet.create({
      textinputStyle:{
        marginHorizontal:wp('4'),
        marginVertical:hp('1'),
        height:hp('7'),
        fontSize:hp('2')
      },
      buttonStyle:{
        height:hp('6') ,
        alignItems:'center',
        borderRadius:wp('3'),
        marginHorizontal:wp('4'),
        marginVertical:hp('1'),  
      }
        
  })
  export default ShopsLogin;