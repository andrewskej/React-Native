import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ResultsDetail = ({result}) => {
    const {name, review_count, rating, image_url} = result;
    return (
            <View style={styles.container}>
                <Image style={styles.image} source={{url: image_url}}/>
                <Text style={styles.name}>{name}</Text>
                <Text>{rating} Stars, {review_count}</Text>
            </View>
        )
}

const styles = StyleSheet.create({
    container:{
        marginLeft:15
    },
    image: {
        width:250,
        height:120,
        borderRadius:4,
        marginBottom:5,
        borderWidth:1,
        borderColor:'red'
    },
    name:{
        fontWeight:'bold',
        fontSize:14,
    }
})

export default ResultsDetail;