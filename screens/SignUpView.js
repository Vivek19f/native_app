import React, { Component } from 'react';
import PropTypes from 'prop-types'
import SideMenu from './SideMenu.js'
import Headers from './Header'
import {NavigationActions} from 'react-navigation';
const BG_IMAGE = require('../assets/images/bg_screen4.jpg');
import Icon from 'react-native-vector-icons/FontAwesome';

import {widthPercentageToDP as wp, heightPercentageToDP as hp,listenOrientationChange as loc,
  removeOrientationListener as rol} from 'react-native-responsive-screen';

  const SCREEN_WIDTH = wp('100%');
  const SCREEN_HEIGHT = hp('100%');
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  KeyboardAvoidingView,
  Image,
  Alert,
  ImageBackground,
  Dimensions,
  ScrollView,
  SafeAreaView 
} from 'react-native';
import { Input, Button } from 'react-native-elements';

export default class SignUpView extends Component {

constructor(props) {
   super(props);
    //this.login= this.login.bind(this);
    this.registerCall = this.registerCall.bind(this);
    var {height, width} = Dimensions.get('window');
    this.state = {screenHeight: height, screenWidth: width,
    isloading:false,
    firstName: '',
    lastName:'',
    email : '',
    password: '',
    status: '',
    wholeResult: '',
    isEmailValid : true,
    isPasswordValid: true,
    isFirstNameValid: true,
    isLastNameValid: true,
    baseUrl: 'https://myapp-19f.herokuapp.com' 
  };
}

static navigationOptions = {
  header: null, 
}
  onClickListener = (viewId) => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  

        
      // Alert.alert(this.state.Usrname+" "+this.state.email+" "+this.state.password , "View_id "+viewId);
      if(this.state.firstName && this.state.lastName){
        if(reg.test(this.state.email)){
        if(this.state.password.length >= 6 ){
            this.registerCall();
          }else{
            this.setState({isPasswordValid: false})
            this.passwordInput.shake()
        }
        }else{
            this.setState({isEmailValid: false})
            this.emailInput.shake()
      }
    }else{
      this.setState({isFirstNameValid: false, isLastNameValid: false})
      this.firstInput.shake()
      this.lastInput.shake()
  }
}



registerCall(){
  var that = this;
  var url = that.state.baseUrl + '/users/register';
   console.log("url:"+url);

  fetch(url,{
        method: 'POST',
        headers: 
            { 
               'Accept': 'application/json', 
               'Content-Type': 'application/json', 
              },
        body: JSON.stringify({first_name: this.state.firstName,last_name: this.state.lastName, email: this.state.email,password: this.state.password})
        }).then(function (response) {
          console.log(response)
          return response.json();
        }).then(function (result) { 
          console.log(result);
          if(result.email){
           that.setState({ status: result,
                           wholeResult: result,
                        });
           Alert.alert("User register successfully ");
           this.props.navigation.navigate('Home')
          //  console.log(that.state.wholeResult.user.uid);
       }else{
         Alert.alert("User Already exists");
        // console.log(result);
  }
}).catch(function (error) {
  console.log("-------- error ------- "+error);
  // alert("result:"+error)
});
}

  

 

  render() {
    const {navigate} = this.props.navigation;
    const wt = wp('100%')
    const ht = hp('100%')

    const {
      selectedCategory,
      isLoading,
      isEmailValid,
      isPasswordValid,
      isConfirmationValid,
      isLastNameValid,
      isFirstNameValid,
      email,
    
      password,
      passwordConfirmation,
    } = this.state;

    return (

      <View
        style={{
          flex: 1,
          
          justifyContent: 'center',
        }}>
          <ScrollView keyboardShouldPersistTaps="handled">
          <View >

          <KeyboardAvoidingView enabled>  

          <View style={styles.SectionStyle}>
         {/* <Headers message="Sign Up"  navigation={this.props.navigation} alert1={true}/> */}
        
        <ImageBackground source={BG_IMAGE} style={[styles.bgImage,{wt}]}>
            
          
     
    
        <View style={styles.formContainer}>

        <View style={styles.inputContainer}>
        <Input
                    leftIcon={
                      <Icon
                        name="user"
                        color="rgba(0, 0, 0, 0.38)"
                        size={25}
                        style={{ backgroundColor: 'transparent' }}
                      />
                    }
                    value={this.state.firstName}
                    keyboardAppearance="light"
                    autoFocus={false}
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="last name"
                    returnKeyType="next"
                    inputStyle={{ marginLeft: 10 }}
                    placeholder={'First Name'}
                    containerStyle={{
                      marginTop: 16,
                      // backgroundColor: '#FFFFFF',
                      borderRadius:30,
                      borderWidth: 0,
                    }}
                    ref={input => (this.firstInput = input)}
                    onSubmitEditing={() => this.fistInput.focus()}
                    onChangeText={firstName => this.setState({ firstName })}
                    errorMessage={
                      isFirstNameValid ? null : 'Please enter a first name'
                    }
                  />
        </View>

        <View style={styles.inputContainer}>
        <Input
                    leftIcon={
                      <Icon
                        name="user"
                        color="rgba(0, 0, 0, 0.38)"
                        size={25}
                        style={{ backgroundColor: 'transparent' }}
                      />
                    }
                    value={this.state.lastName}
                    keyboardAppearance="light"
                    autoFocus={false}
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="last name"
                    returnKeyType="next"
                    inputStyle={{ marginLeft: 10 }}
                    placeholder={'Last Name'}
                    containerStyle={{
                      marginTop: 16,
                      // backgroundColor: '#FFFFFF',
                      borderRadius:30,
                      borderWidth: 0,
                    }}
                    ref={input => (this.lastInput = input)}
                    onSubmitEditing={() => this.lastInput.focus()}
                    onChangeText={lastName => this.setState({ lastName })}
                    errorMessage={
                      isLastNameValid ? null : 'Please enter a last name'
                    }
                  />
        </View>

        <View style={styles.inputContainer}>
        
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
                    placeholder={'Email'}
                    containerStyle={{
                      marginTop: 16,
                      // backgroundColor: '#FFFFFF',
                      borderRadius:30,
                      borderWidth: 0,
                    }}
                    ref={input => (this.emailInput = input)}
                    onSubmitEditing={() => this.emailInput.focus()}
                    onChangeText={email => this.setState({ email })}
                    errorMessage={
                      isEmailValid ? null : 'Please enter a valid email address'
                    }
                  />
        </View>
        
        <View style={styles.inputContainer}>
        <Input
                    leftIcon={
                      <Icon
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
                    returnKeyType={ 'next'}
                    blurOnSubmit={true}
                    containerStyle={{
                      marginTop: 16,
                      // backgroundColor: '#FFFFFF',
                      borderRadius:30,
                      borderWidth: 0,
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
        </View>

                      
        <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} onPress={() => this.onClickListener('sign_up')}>
          <Text style={styles.signUpText}>Sign up</Text>
        </TouchableHighlight>
        </View>

       

        <View style={styles.helpContainer}>
                <Button
                  title={'Log In'}
                  titleStyle={{ color: 'white' }}
                  buttonStyle={{ backgroundColor: 'transparent' }}
                  underlayColor="transparent"
                  onPress={() =>  this.props.navigation.navigate('LoginScreen')}
                />
          </View>


        
        </ImageBackground>
        
        
      </View >

      
      </KeyboardAvoidingView>
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
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'white',
  },
  header: {
    position: 'absolute',
    height: hp('10%') 
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      // backgroundColor: '#FFFFFF',
      borderRadius:30,
      // borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:20,
    height:20,
    marginLeft:15,
    justifyContent: 'center'
  },
  loginContainer: {
    alignItems: 'center',
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
  buttonContainer: {
 
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32, 
    flex: 0,
    backgroundColor: 'rgba(232, 147, 142, 1)',
    borderRadius: 10,
    height: 50,
    width: 200,
  },
  signupButton: {
    // backgroundColor: 'black',
  },
  signUpText: {
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
  helpContainer: {
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 