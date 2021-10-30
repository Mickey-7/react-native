//snippet:rfns
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>My Todos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 50,
        padding: 8,
        backgroundColor: 'coral'
    },
    title: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'

    }
})
