import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import NewsFeed from './src/components/NewsFeed'




export default class App extends Component {
  
  render() {


    return (
      <View style={viewStyles}>
        <NewsFeed></NewsFeed>
      </View>
    );
  }
}




const viewStyles = {
  backgroundColor: 'white',
  flex:1,
  justifyContent: 'center',
  alignItems : 'center'
}


