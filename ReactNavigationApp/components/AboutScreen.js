//snippet:rnfs
import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default function AboutScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>About</Text>
            <Button title="Go to details"
                onPress={() => { navigation.navigate('routeThree') }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
