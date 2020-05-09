import React, { useState } from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';

const CounterScreen = () => {
    // state={
    //     counter: 0
    // }
    const [ counter, setCounter ] = useState(0);
     
    return (
        <View>
            <Button title="Increase" onPress={()=>{
                // this.setState({counter: counter+1})
                setCounter(counter + 1);
            }}/>

            <Button title="Decrease" onPress={()=>{
                // this.setState({counter: counter-1})
                setCounter(counter - 1);
            }}/>
            <Text>Current Count: {counter}</Text>
        </View>
    )
};

const styles = StyleSheet.create({ })

export default CounterScreen;