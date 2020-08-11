import React from 'react';
import {View,Text,ScrollView,StyleSheet} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  import {withTheme,Card,TextInput,Button} from 'react-native-paper';
  import {withNavigation} from 'react-navigation';

  const DriverRegistration = ({navigation}) => {
      return(
          
        <View style={{flex:1}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Card style= {{marginHorizontal:wp('4'),marginVertical:hp('6'),elevation:wp('2')}}>
          <Text style={{fontSize:hp('5'),fontWeight:'bold',alignSelf:'center',marginVertical:hp('2')}}>Driver Registration</Text>
          <TextInput label="Driver Name" mode='outlined' style={styles.textinputStyle} />
          <TextInput label="Driver Email" mode='outlined' style={styles.textinputStyle} />
          <TextInput label="Password" mode='outlined' style={styles.textinputStyle}/>
          <TextInput label="Gender" mode='outlined' style={styles.textinputStyle}/>
          <TextInput label="Driver Address" mode='outlined' style={styles.textinputStyle}/>
          <TextInput label="Driver Phone" mode='outlined' style={styles.textinputStyle}/>
          <TextInput label="Driver Area code" mode='outlined' style={styles.textinputStyle}/>
          <TextInput label="Date of birth" mode='outlined' style={styles.textinputStyle}/>
          <TextInput label="Driver's Delivery Charges" mode='outlined' style={styles.textinputStyle}/>
          <Button mode='contained' style={styles.buttonStyle}> Upload Driver image </Button>
          <Button mode='contained' style={styles.buttonStyle}> Upload Driver Licence </Button>
          <Button mode='contained' style={styles.buttonStyle}> Upload Driver Id Card </Button>
          <Button mode='contained' style={styles.buttonStyle}> Upload Number plate </Button>
          <Button mode='contained' style={styles.buttonStyle}> Register </Button>
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
      fontSize:hp('2'),
      
    },
    buttonStyle:{
      borderRadius:wp('3'),
      marginHorizontal:wp('4'),
      marginVertical:hp('1'), 
      height:hp('6') ,
      alignItems:'center'
    }
      
})
  export default withNavigation(DriverRegistration);