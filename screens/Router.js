import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import SignUpView from './SignUpView'
import SideMenu from './SideMenu';


import {DrawerNavigator} from 'react-navigation';

export default DrawerNavigator({
 
 
  // Login: {
  //   screen: LoginScreen,
  //   // navigationOptions: { 
  //   //   drawerLockMode: 'locked-closed'
  //   // }
  // },
  Home: {
    screen: HomeScreen,
    navigationOptions: { 
      drawerLockMode: 'locked-closed'
    }
  },

  SignUpView: {
    screen: SignUpView,
     navigationOptions: { 
   drawerLockMode: 'locked-closed'
 }
  },
  
}, {
    initialRouteName: '',
    contentComponent: SideMenu,
    drawerWidth: 300,
    drawerOpenRoute : 'DrawerOpen',
    drawerCloseRoute: 'DrawerCLose',
    drawerToggleRoute: 'DrawerToggle'
});
