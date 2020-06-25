import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator,  TouchableHighlight,SafeAreaView } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import PropTypes from 'prop-types'
import {NavigationActions} from 'react-navigation';

 
import { Image, Header} from 'react-native-elements'


export default class Headers extends React.Component {


  constructor(props){
    super(props);
   
  }
   

  render() {
    const {navigate} = this.props.navigation;
    return (
   
      <View >
        
        <Header
            statusBarProps={{ barStyle: 'light-content' }}
            barStyle="light-content"
                leftComponent={
                  (this.props.panch)?
                  { icon: 'arrow-back',  color: '#fff', marginBottom: 10,
                onPress: () => {this.props.navigation.goBack()}}:{ icon: 'menu', color: '#fff',
                onPress: () => {this.props.navigation.openDrawer()}}
                  
                  
                }
                centerComponent={{ text: this.props.message, style: { color: '#fff', marginBottom: 10 } }}
                // rightComponent={
                //   (this.props.alert1)?
                //   { icon: 'notifications', color: '#fff',
                // onPress: () => {this.props.navigation.navigate('Notification')}}:{ icon: 'home', color: '#fff',
                // onPress: () => {this.props.navigation.navigate('Home')}}}
                
                containerStyle={{
                height: hp('8%'),
                width: wp('100%'),
                borderBottomWidth: 0
                
            }}
       />

</View>


    );
  }

}
Headers.propTypes = {
  message: PropTypes.string,
  alert1: PropTypes.boolean,
  panch: PropTypes.boolean
 
};
 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'absolute',
  },
text: {
  fontSize: 30,
}
});
