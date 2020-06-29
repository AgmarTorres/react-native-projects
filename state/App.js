import React, { Component } from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';

class Clock extends Components{
  constructor( props){
    super(props)
    this.state = {date: new Date()}
    setInterval(() => {
      this.setState({date: new Date})
      }, 1000
    )
  }

  render (){
    return (
      <>
        <Text style={{fontSize: 50}}> Hora: { this.state.date.toLocaleTimeString() } </Text>
      </>
    )
  }
}
 
export default class App extends Component{
  render(){
    return (
      <View >
        <Clock />
      </View>
    )
  }
}
 