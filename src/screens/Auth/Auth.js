import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import ImagePicker from 'react-native-image-picker';

import startMainTabs from '../MainTabs/startMainTabs';

class AuthScreen extends Component {
  loginHandler = () => {
    startMainTabs();
    // ImagePicker.showImagePicker({title: 'Pick an image'}, (response) => {
    //   console.log('Response = ', response);
    // 
    //   if (response.didCancel) {
    //     console.log('User cancelled image picker');
    //   }
    //   else if (response.error) {
    //     console.log('ImagePicker Error: ', response.error);
    //   }
    //   else if (response.customButton) {
    //     console.log('User tapped custom button: ', response.customButton);
    //   }
    //   else {
    //     let source = { uri: response.uri };
    //   }
    // });
  }

  render() {
    return (
      <View>
        <Text>Auth Screen</Text>
        <Button title="Login" onPress={this.loginHandler} />
      </View>
    );
  }
}

export default AuthScreen;
