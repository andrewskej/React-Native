import * as React from 'react';
import { Text, View, StyleSheet, StatusBar} from 'react-native';
import Weather from './Weather';

const API_KEY = "168d9dd2c7260bac13a6473520f870b8"

export default class App extends React.Component {

 state = {
   isLoaded: false,
   error:null,
   temperature:null,
   name:null
 }

  componentDidMount(){
    navigator.geolocation.getCurrentPosition(
      position => {
        this._getWeather(position.coords.latitude, position.coords.longitude)
      }, 
      error => { console.log(error) },
      {
        enableHighAccuracy:true
      })
  }

  _getWeather = (lat,lon) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}`)
    .then(response => response.json())
    .then(json => {this.setState({
        temperature:json.main.temp,
        name:json.weather[0].main,
        isLoaded:true
      })
    })
  }

  render() {
    const {isLoaded, error, temperature, name} = this.state;
    console.log(isLoaded, name)
    return (
      <View style={styles.container}>
        <StatusBar hidden={true}/>
        {
          isLoaded && name? (<Weather weatherName={name} temp={Math.floor(temperature - 273.15)}/>): 
          <View style={styles.loading}>
            <Text style={styles.loadingText}>Getting the Weather...!</Text>
          </View> 
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff'
  },
  loading : {
    flex: 1,
    backgroundColor: "#FDF6AA",
    justifyContent: "flex-end",
    paddingLeft: 25
  },
  loadingText:{
    fontSize:38,
    marginBottom: 100
  }
});

