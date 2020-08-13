import React from 'react';
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {withTheme,card, Card} from 'react-native-paper';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import TabNavComponent from './TabNavComponent';
import { withNavigation } from 'react-navigation';
// import { TouchableOpacity } from 'react-native-gesture-handler';


const SquareComponent = ({name})=> {

    return(
    
        <TouchableOpacity onPress={()=>{}}>
        <Card style={styles.iconcontainer}>
            <FontAwesome name={name} size={hp('4')} color='#1B1B1B' style={styles.iconstyle} />
        </Card>
        </TouchableOpacity>
        

    )
}
const styles = StyleSheet.create({
iconcontainer:{
    height:wp('15'),
    width:wp('15'),
    // borderRadius:hp('9%'),
    backgroundColor:"#FFFFFFFF",
    // marginHorizontal: wp('1'),
    // marginVertical: hp('1'),
    flexDirection:'row',
    alignItems:'center',
},
iconstyle:{
    alignSelf:'center'
},

})
export default withNavigation(SquareComponent);