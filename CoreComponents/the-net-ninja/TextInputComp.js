//snippet:rfns
import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

export default function TextInputComp() {
    const [data, setData] = useState('data');
    const [data1, setData1] = useState('data1')
    return (
        <View>
            <Text style={styles.state}>/--- Text Inputs ---/</Text>
            <Text>Enter data:</Text>
            <TextInput
                style={styles.input}
                placeholder='eg. John Doe'
                onChangeText={(val) => setData(val)}
            />
            <Text>Enter data1:</Text>
            <TextInput
                keyboardType='numeric'
                style={styles.input}
                placeholder='eg. 77'
                onChangeText={(val) => setData1(val)}
            />
            <Text>data:{data}, data1:{data1}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 7,
        margin: 10,
        width: 200
    },
    state: {
        marginTop: 20,
        fontWeight: 'bold'

    },
})
