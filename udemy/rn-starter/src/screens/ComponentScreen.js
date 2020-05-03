import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentScreen = () => {
    const greeting = 'Yousik Jeon';

    return (
            <View>
                <Text style={styles.textStyle}>Components Screen</Text>
                <Text style={styles.subHeaderStyle}>Hello {greeting}</Text>
            </View>
            );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    subHeaderStyle:{
        fontSize: 20
    }
})

export default ComponentScreen;