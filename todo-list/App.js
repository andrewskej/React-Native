import React from 'react';
import { StyleSheet, Text, View, StatusBar, TextInput, Dimensions, ScrollView, Platform } from 'react-native';
import ToDo from './ToDo';

const {height, width} = Dimensions.get("window")

// https://forums.expo.io/t/genymotion-is-not-responding-error/547/21
// 아 진짜 좆같은 안드로이드

export default class App extends React.Component {
  state={
    newToDo:""
  };
  render() {
    const {newToDo} = this.state;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <Text style={styles.title}>To do </Text>
        <View style={styles.card}>
          <TextInput 
          style={styles.input} 
          placeholder={"fuckin shitty connection!!!3 ..."} 
          value={newToDo} 
          onChangeText={this._controlNewToDo}
          returnKeyType={"done"}
          autoCorrect={false}
        />
        <ScrollView contentContainerStyle={styles.toDos}>
          <ToDo/>
        </ScrollView>
        </View>
        <Text>재수정</Text>
      </View>
    );
  }
  _controlNewToDo = text => {
    this.setState({
      newToDo: text
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orangered',
    alignItems: 'center',
    justifyContent: 'center',
  },
    title:{
      color:"white",
      fontSize:30,
      marginTop:50,
      fontWeight: "200",
      marginBottom: 30
    },
     card:{
      flex:1,
      backgroundColor:'white',
      width: width - 25,
      borderRadius: 10,
      borderTopLeftRadius: 10,
      borderTopRightRadius:10,
      ...Platform.select({
        ios:{
          shadowColor:"rgba(50,50,50)",
          shadowOpacity:0.5,
          shadowRadius:5,
          shadowOffSet:{
            height:-1,
            width:0
          }
        },
        android:{
          elevation: 3
        }
      })
    },
     input:{
      padding: 20,
      borderBottomColor:"#bbb",
      borderBottomWidth: 1,
      fontSize: 25
    },
     toDos:{
       alignItems:'center'
     }
});
