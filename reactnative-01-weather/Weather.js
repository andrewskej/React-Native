import React, {Component} from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import {LinearGradient} from 'expo';
import {Ionicons} from "@expo/vector-icons";
import PropType from 'prop-types'

const WeatherCases = {
  Rain:{
    colors:['#00C6FB','#005BEA'],
    title:"Raining",
    subtitle:"비 온댄다",
    icons:'ios-rainy'
  },
  Clear:{
    colors:['#00C6FB','#005BEA'],
    title:'Sunny?',
    subtitle:'해 난다!???',
    icons:'ios-sunny'
  },
  Thunderstorm:{
    colors:['#00C6FB','#005BEA'],
    title:'ThunderStorm',
    subtitle:'',
    icons:'ios-thunderstorm'
  },
  Clouds:{
    colors:['#00C6FB','#005BEA'],
    title:'clouds',
    subtitle:'cloudyclody',
    icons:'ios-cloudy'
  }
}

function Weather({weatherName, temp}){
  return(
    <LinearGradient colors={WeatherCases[weatherName].colors} style={styles.container}>
      <View style={styles.upper}>
        <Ionicons color="white" size={144} name={WeatherCases[weatherName].icons}/> 
        <Text style={styles.temp}>{temp}'C</Text>
      </View>
      <View style={styles.lower}>
        <Text style={styles.title}>{WeatherCases[weatherName].title}</Text>
        <Text style={styles.subtitle}>{WeatherCases[weatherName].subtitle}</Text>
      </View>
    </LinearGradient>
  )
}

// Weather.propType= {
//   temp: PropTypes.number.isRequired
// }

export default Weather

 const styles = StyleSheet.create({
   container: {
     flex: 1
   },
   upper: {
     flex: 1,
     alignItems:"center",
     justifyContent:"center",
     backgroundColor:"transparent"
   },
   temp:{
     fontSize: 38,
     backgroundColor: "transparent",
     color:"white",
     marginTop: 10
   },
   lower:{
     flex:1,
     alignItems:"flex-start",
     justifyContent:"flex-end",
     paddingLeft:25
     }
  ,title:{
     fontSize: 38,
     backgroundColor: "transparent",
     color:"white",
     marginBottom: 10,
     fontWeight: "300"
   },
   subtitle:{
     fontSize: 24,
     backgroundColor:"transparent",
     color:"white",
     marginBottom:24
   }
 })