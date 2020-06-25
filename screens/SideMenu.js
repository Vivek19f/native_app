import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from './SideMenu.style';
import {NavigationActions, DrawerActions} from 'react-navigation';
import {ScrollView, Text, View, Image,AsyncStorage } from 'react-native';
// import {Icon} from 'react-native-vector-icons'
import { ListItem, Icon, } from 'react-native-elements'


class SideMenu extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
    this.props.navigation.dispatch(DrawerActions.closeDrawer())
  }

  logout= async()=>{
    //alert("logout")
   // const LogData = await AsyncStorage.removeItem('userData'); 
      
    await AsyncStorage.multiRemove(['userData'],()=>{
    
      this.props.navigation.replace('LoginScreen')
    })
    
    }

  render () {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <View style={[styles.topHeader]}>
              <Image style={[styles.avatar,style={ resizeMode: 'contain',  paddingBottom: 0,
      marginBottom: 0 }]} source={require('../assets/images/logo.png')}  />
              <Text style={styles.headerText}>Welcome to TheApp</Text>
            </View>

      

             {/* example  */}
             <ListItem 
            onPress={this.navigateToScreen('Home')}  
              title='Home'
              leftIcon={<Icon
                name='home'
                type='font-awesome'
                color='#517fa4'
                
              />}
            />
              <ListItem 
            onPress={this.navigateToScreen('SignUpView')}  
              title='SignUp'
              leftIcon={<Icon
                name='user-plus'
                type='font-awesome'
                color='#517fa4'
                
              />}
            />
           
           
           
            <ListItem
              onPress={()=>{this.logout()}}
              title='Logout'
              leftIcon={<Icon
                name='ios-log-out'
                type='ionicon'
                color='#517fa4'
              />}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};



export default SideMenu;
