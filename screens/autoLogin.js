import React, { Component } from "react";
import {
  StyleSheet,
  Image,
  View,
  ImageBackground,
  ScrollView,
  AsyncStorage,
  ActivityIndicator,
  KeyboardAvoidingView
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

export default class autoScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
    //NativeModules.ActivityStarter.dialNumber("122");
    this.navigateFunc();
  }
  static navigationOptions = {
    header: null
  };

  navigateFunc = async () => {
    try {
      const value = await AsyncStorage.getItem("userData");

      setTimeout( ()=>{if (value) {
        this.setState({ isLoading: false });
        this.props.navigation.replace('Router')      }
         else {
        this.setState({ isLoading: false });
        this.props.navigation.replace('LoginScreen')
      }
    }, 0);  
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} enabled>
        <ScrollView style={{ width: wp("100%") }}>
          <ImageBackground
            source={require("../assets/images/bg_screen4.jpg")}
            style={{
              flex: 1,
              width: wp("100%"),
              height: hp("100%")
            }}
          >
                 <View style={styles.titleContainer}>
           
                        <Image  
                        source={require('../assets/images/logo1.png') } 
                        style={{width: wp('80%'), height: hp('50%') }} 
                        resizeMode= 'contain'
                        />

                </View>
          </ImageBackground>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1d77aa"
  }, 
   titleContainer:{
    height: 150,
    flex:1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    marginLeft:30,
  }
});
