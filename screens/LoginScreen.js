import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {widthPercentageToDP as wp, heightPercentageToDP as hp,listenOrientationChange as loc,
  removeOrientationListener as rol} from 'react-native-responsive-screen';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Dimensions,
  LayoutAnimation,
  UIManager,
  KeyboardAvoidingView,
  ScrollView,
  Image,
  AsyncStorage,Platform
} from 'react-native';
//import { Font } from 'expo';
import { Input, Button } from 'react-native-elements';

import Icon from 'react-native-vector-icons/FontAwesome';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import {apiLogin} from '../config/constants.js'


const SCREEN_WIDTH = wp('100%');
const SCREEN_HEIGHT = hp('100%');

const BG_IMAGE = require('../assets/images/bg_screen4.jpg');

// Enable LayoutAnimation on Android
UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

const TabSelector = ({ selected }) => {
  return (
    <View style={styles.selectorContainer}>
      <View style={selected && styles.selected} />
    </View>
  );
};

TabSelector.propTypes = {
  selected: PropTypes.bool.isRequired,
};
console.disableYellowBox = true;

console.ignoredYellowBox = ['Warning:'];
console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];
export default class LoginScreen2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fontLoaded: false,
      selectedCategory: 0,
      isLoading: false,
      isEmailValid: true,
      isPasswordValid: true,
      isConfirmationValid: true,
      email:'',
      password:'',
      error:false,
      deviceID:'fffffff'
    };

    this.selectCategory = this.selectCategory.bind(this);
    this.login = this.login.bind(this);
   // this.signUp = this.signUp.bind(this);
   console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];

  }

  componentDidMount() {
    // await Font.loadAsync({
    //   georgia: require('../assets/fonts/Georgia.ttf'),
    //   regular: require('../assets/fonts/Montserrat-Regular.ttf'),
    //   light: require('../assets/fonts/Montserrat-Light.ttf'),
    // });
    loc(this);
    this.setState({ fontLoaded: true });
  }

    

  selectCategory(selectedCategory) {
    LayoutAnimation.easeInEaseOut();
    this.setState({
      selectedCategory,
      isLoading: false,
    });
  }
  static navigationOptions = {
    header: null, 
}
  




  login() {
    const { email, password } = this.state;
    this.setState({ isLoading: true });
    // Simulate an API call
   // setTimeout(() => {
      LayoutAnimation.easeInEaseOut();
      this.setState({
        isLoading: false,
        
        isPasswordValid: password.length >= 6 || this.passwordInput.shake(),
      },()=>{
        if( (this.state.isPasswordValid) ){
          // alert("i was called")
         // alert(this.state.isEmailValid +"e p"+ this.state.isPasswordValid)
          let formdata = new FormData();
         
          formdata.append("email", this.state.email)
          formdata.append("password", this.state.password)
           formdata.append("action", "login")
          // formdata.append("merchant_password", this.state.password)

          console.log('before fetch')

          this.setState({isLoading:true},()=>{
           fetch('https://myapp-19f.herokuapp.com/users/login', {
            method: 'post',
            headers: 
            { 
               'Accept': 'application/json', 
               'Content-Type': 'application/json', 
             
              
              },
              body: JSON.stringify({
              
                
                email: this.state.email,
                password: this.state.password
              
              })
            })
          .then((response) => {

                      return response.json(); 
                    }
                  ).then((result)=>{
                    
                    // console.log(responseJson)
                    
           
              // alert(JSON.stringify(responseJson))
            if(result.token){
              AsyncStorage.setItem('userData', JSON.stringify(result) ).then(()=>{
         this.props.navigation.replace('Router')
          // const reset = (navigation, routeName, params = {}) => {
          //   const resetAction = NavigationActions.reset({
          //       index: 0,
          //       actions: [
          //           NavigationActions.navigate({ routeName, params })
          //       ],
          //   });
          
          //   navigation.dispatch(resetAction);
          // }
        // this.regNotification(responseJson.chk_for_login.restaurant_id);
              })
          
            }else{
              this.setState({isLoading:false},()=>{
              alert("Error in login")
         
         
              })
            }
                  })
                  
                  .catch((error) => {
                   this.setState({isLoading:false},()=>{
                     
               
                    })
                    console.error(error);
                  });
          
            })
         }

        
      }   );
   // }, 1500);




  }

  render() {
    const {navigate} = this.props.navigation;

    const {
      selectedCategory,
      isLoading,
      isEmailValid,
      isPasswordValid,
      isConfirmationValid,
      email,
    
      password,
      passwordConfirmation,
    } = this.state;
    const isLoginPage = selectedCategory === 0;
    const isSignUpPage = selectedCategory === 1;
    const wt = wp('100%')
    return (
      <ScrollView>
      <View style={styles.container}>
        <ImageBackground source={BG_IMAGE} style={[styles.bgImage,{wt}]}>
          {this.state.fontLoaded ? (
            <View>
              <KeyboardAvoidingView
                contentContainerStyle={styles.loginContainer}
                behavior="position"
              >
                <View style={styles.titleContainer}>
                  {/* <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.titleText}>EAT</Text>
                  </View>
                  <View style={{ marginTop: -10, marginLeft: 10 }}>
                    <Text style={styles.titleText}>CUBES</Text>
                  </View> */}
                    

                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Button
                    type="clear"
                    activeOpacity={0.7}
                    onPress={() => //this.selectCategory(0)
                    console.log("hi")
                    }
                    containerStyle={{ flex: 1 }}
                    titleStyle={[
                      styles.categoryText,
                     styles.selectedCategoryText,
                    ]}
                    title={'Login'}
                  />
                  {/* <Button
                    disabled={isLoading}
                    type="clear"
                    activeOpacity={0.7}
                    onPress={() => this.selectCategory(1)}
                    containerStyle={{ flex: 1 }}
                    titleStyle={[
                      styles.categoryText,
                      isSignUpPage && styles.selectedCategoryText,
                    ]}
                    title={'Sign up'}
                  /> */}
                </View>
                <View style={styles.rowSelector}>
                  <TabSelector selected={isLoginPage} />
                  {/* <TabSelector selected={isSignUpPage} /> */}
                </View>
                <View style={styles.formContainer}>
                  <Input
                    leftIcon={
                      <Icon
                        name="envelope-o"
                        color="rgba(0, 0, 0, 0.38)"
                        size={25}
                        style={{ backgroundColor: 'transparent' }}
                      />
                    }
                    value={this.state.email}
                    keyboardAppearance="light"
                    autoFocus={false}
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="email-address"
                    returnKeyType="next"
                    inputStyle={{ marginLeft: 10 }}
                    placeholder={'email'}
                    containerStyle={{
                      borderBottomColor: 'rgba(0, 0, 0, 0.38)',
                    }}
                    ref={input => (this.emailInput = input)}
                    onSubmitEditing={() => this.passwordInput.focus()}
                    onChangeText={email => this.setState({ email })}
                    errorMessage={
                      isEmailValid ? null : 'Please enter a valid email address'
                    }
                  />
                  <Input
                    leftIcon={
                      <SimpleIcon
                        name="lock"
                        color="rgba(0, 0, 0, 0.38)"
                        size={25}
                        style={{ backgroundColor: 'transparent' }}
                      />
                    }
                    value={password}
                    keyboardAppearance="light"
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                    returnKeyType={isSignUpPage ? 'next' : 'done'}
                    blurOnSubmit={true}
                    containerStyle={{
                      marginTop: 16,
                      borderBottomColor: 'rgba(0, 0, 0, 0.38)',
                    }}
                    inputStyle={{ marginLeft: 10 }}
                    placeholder={'Password'}
                    ref={input => (this.passwordInput = input)}
                    onSubmitEditing={() =>
                      isSignUpPage
                        ? this.confirmationInput.focus()
                        : this.login()
                    }
                    onChangeText={password => this.setState({ password })}
                    errorMessage={
                      isPasswordValid
                        ? null
                        : 'Please enter at least 6 characters'
                    }
                  />
            
                  <Button
                    buttonStyle={styles.loginButton}
                    containerStyle={{ marginTop: 32, flex: 0 }}
                    activeOpacity={0.8}
                    title={isLoginPage ? 'LOGIN' : 'SIGN UP'}
                    onPress={isLoginPage ? this.login : this.signUp}
                    titleStyle={styles.loginTextButton}
                    loading={isLoading}
                    disabled={isLoading}
                  />
                </View>
              </KeyboardAvoidingView>
              <View style={styles.helpContainer}>
                <Button
                  title={'Sign up ?'}
                  titleStyle={{ color: 'white' }}
                  buttonStyle={{ backgroundColor: 'transparent' }}
                  underlayColor="transparent"
                  onPress={() =>  this.props.navigation.navigate('SignUpView')}
                />
              </View>
            </View>
          ) : (
            <Text>Loading...</Text>
          )}
        </ImageBackground>
      </View>
      </ScrollView>
    );
   
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowSelector: {
    height: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectorContainer: {
    flex: 1,
    alignItems: 'center',
  },
  selected: {
    position: 'absolute',
    borderRadius: 50,
    height: 0,
    width: 0,
    top: -16,
    borderRightWidth: 70,
    borderBottomWidth: 70,
    borderColor: 'white',
    backgroundColor: 'white',
  },
  loginContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginTextButton: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  loginButton: {
    backgroundColor: 'rgba(232, 147, 142, 1)',
    borderRadius: 10,
    height: 50,
    width: 200,
  },
  titleContainer: {
    height: 150,
    backgroundColor: 'transparent',
    justifyContent: 'center',
  },
  formContainer: {
    backgroundColor: 'white',
    width: SCREEN_WIDTH - 30,
    borderRadius: 10,
    paddingTop: 32,
    paddingBottom: 32,
    alignItems: 'center',
  },
  loginText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  bgImage: {
    flex: 1,
    top: 0,
    left: 0,
    height:hp('100%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 24,
    //fontFamily: 'light',
    backgroundColor: 'transparent',
    opacity: 0.54,
  },
  selectedCategoryText: {
    opacity: 1,
  },
  titleText: {
    color: 'white',
    fontSize: 30,
    fontFamily: 'regular',
  },
  helpContainer: {
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
