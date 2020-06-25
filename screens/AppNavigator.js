import { createStackNavigator } from 'react-navigation';
import LoginScreen from './LoginScreen';
import Router from './Router';
import autoScreen from './autoLogin';

import { zoomIn,fromLeft } from 'react-navigation-transitions';

const AppNavigator = createStackNavigator({
  autoScreen:{screen:autoScreen},
  LoginScreen:{screen:LoginScreen},
  
  Router: { screen: Router },
  
},{
  initialRouteName: "autoScreen",
  headerMode: "none",
  transitionConfig: () => zoomIn(1000),

  });

console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];
export default AppNavigator;