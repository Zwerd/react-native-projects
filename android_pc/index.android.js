import React, {Component} from 'react';
import{AppRegistry, Text, View} from 'react-native';

export default class android_pc extends Component{
  render(){
    return(
      <View>
        <Text>Hello Worlds!!!</Text>
      </View>
    )
  }
}

AppRegistry.registerComponent('android_pc', () => android_pc);
