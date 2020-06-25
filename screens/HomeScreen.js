import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator,  TouchableHighlight,SafeAreaView, Image, ScrollView, TouchableOpacity, AsyncStorage } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {NavigationActions} from 'react-navigation';
import PropTypes from 'prop-types'



 import SideMenu from './SideMenu.js'
import { Header, Divider, Card} from 'react-native-elements'

import Headers from './Header'
console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];
export default class HomeScreen extends React.Component {
 
  logout= async()=>{
    //alert("logout")
   // const LogData = await AsyncStorage.removeItem('userData'); 
      
    await AsyncStorage.multiRemove(['userData'],()=>{
    
      this.props.navigation.replace('LoginScreen')
    })
    
    }
  render() {

    const {navigate} = this.props.navigation;





    return (
   
      <View style={[height= hp('100%'),styles.container ]}>

        <Headers message="Home"  navigation={this.props.navigation} alert1={true}/>

         
        



        <ScrollView style= {{width: wp('100%'),height:hp('50%')}}>
        <View style={{alignContent: 'center', alignItems: 'center',height:hp('50%')}}> 
          
        
          <View style={{flexDirection: 'row', marginBottom: hp('1%')}}>
          
          <Card  containerStyle={[ styles.card1,style={alignItems: 'center', elevation: 5, alignItems: 'center',justifyContent:'center'} ]}>
              
              <Text numberOfLines={2} onPress={()=>{this.logout()}} style={{maxWidth: wp('17%'), textAlign: 'center'}}>Log out</Text>
            </Card>
       

             </View>
          </View>
        </ScrollView>

           
            
            
       
         
      </View>
    );
  }

}
SideMenu.propTypes = {
  navigation: PropTypes.object
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    position: 'absolute',
    height: hp('10%')
  },
  text: {
    fontSize: 30,
  },
  imageslider1: {
    height: hp('30%'),
    marginBottom: 10
  },
  customImage: {
    height: hp('30%'),
    width: wp('100%'),
    flexDirection: 'row'
  },
  horizontal: {
    flexDirection: 'row'
  },
  gridView: {
    marginTop: 10,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    margin: 8,
    height: hp('16%'),
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
  avatar:{
    width:wp('17%'),
    height:wp('17%'),
    alignItems:'center'
    
  },
  card1:{
    borderRadius: 10,
    width:wp('38%'),
    height:hp('17%'),
    justifyContent:'center',

    
  },
});
