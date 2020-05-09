import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.parentStyle}>
            <View style={styles.viewOneStyle}></View>
            <View style={styles.viewTwoStyle}></View>
            <View style={styles.viewThreeStyle}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    parentStyle: {
        borderWidth:3,
        borderColor:'black',
        height:200,
        flexDirection:'row',
        // alignItems:'center',
        justifyContent:'space-between'
    },  
    viewOneStyle:{
        width:50,
        height:50,
        borderWidth: 3,
        borderColor:'red',
        backgroundColor:'red'
    },
    viewTwoStyle:{
        width:50,
        height:50,
        borderWidth: 3,
        borderColor:'green',
        backgroundColor:'green',
        // marginTop:50,
        alignSelf:'center'
    },
    viewThreeStyle:{
        width:50,
        height:50,
        borderWidth: 3,
        borderColor:'purple',
        backgroundColor:'purple'
    }


})

export default BoxScreen;