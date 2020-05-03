import React from 'react';
import {View, Text, TouchableOpacity, Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get("window");

class ToDo extends React.Component{
    state = {
        isEditing: false,
        isCompleted: false
    };


    render(){
        const {isCompleted} = this.state;
        return(
            <View style={styles.container}>
                <TouchableOpacity onPress={this._toggleComplete}>
                    <View style={[styles.circle, isCompleted ? styles.completedCircle : styles.uncompletedCircle]}/>
                </TouchableOpacity>
                <Text style={styles.text}>개같은 안드로이드 에뮬레이터 </Text>
            </View>
        )
    }

  _toggleComplete = () => {
      this.setState(prevState => {
          return ({
              isCompleted: !prevState.isCompleted
          })
      })
  }

}


const styles = StyleSheet.create({
    container:{
        width: width-50,
        borderBottomColor: "#bbb",
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: "row",
        alignItems:'center'
    },
    text:{
        fontWeight:'600',
        fontSize:20,
        marginVertical:20
    },
    circle:{
        width:25,
        height:25,
        borderRadius:25,
        backgroundColor:'white',
        borderColor:'red',
        borderWidth:3,
        marginRight:20
    },
    completedCircle:{
        borderColor:'pink',
        backgroundColor:'yellow'
    },
    uncompletedCircle:{
        borderColor:'gray'
    }
})

export default ToDo;