import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';



export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.header}><Text style={styles.text}>Header</Text></View>
        <View style={styles.title}><Text style={styles.text}>Title</Text></View>
        <View style={styles.content}><Text style={styles.text}>Contents</Text></View>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.button}><Text style={styles.text}>취소</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button}><Text style={styles.text}>확인</Text></TouchableOpacity>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header:{
    flex:1,
    width:'100%',
    marginTop:'5%',
    borderWidth:1,
    borderColor:'black',
    justifyContent:'center',
    alignItems:'center',
  },
  text:{
    fontSize:35,
  },
  title:{
    flex:2,
    width:'100%',
    borderWidth:1,
    borderColor:'black',
    justifyContent:'center',
    alignItems:'center',
  },
  content:{
    flex:5,
    width:'100%',
    borderWidth:1,
    borderColor:'black',
    justifyContent:'center',
    alignItems:'center',
  },
  footer:{
    width:'100%',
    backgroundColor:'white',
    borderWidth:1,
    borderColor:'black',
    alignItems:'center',
    justifyContent:'space-around',
    flexDirection:'row'
  },
  button:{
    width:'35%',
    height:'35%',
    borderWidth:1,
    borderColor:'black',
    marginTop:'2%',
    marginBottom:'2%',
    paddingBottom:'12%',
    borderRadius:80,
    justifyContent:'center',
    alignItems:'center',
  }
 
});
