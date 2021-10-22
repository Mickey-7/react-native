// snippet: rfns

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function ViewsTextStyles() {
    return (
        <View>
            <Text style={styles.boldText}>/--- Views, Text & Styles ---/</Text>
            <View style={styles.header}>
                <Text style={styles.boldText}>Hello World!</Text>
            </View>
            <View style={styles.body}>
                <Text>Lorem ipsum dolor sit amet </Text>
                <Text>Lorem ipsum dolor sit amet </Text>
                <Text>Lorem ipsum dolor sit amet </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'pink',
        padding: 20
    },
    boldText: {
        fontWeight: 'bold'
    },
    body: {
        backgroundColor: 'yellow',
        padding: 20,
        fontWeight: 'bold'
    },
})
