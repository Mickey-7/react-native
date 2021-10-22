//snippet: rfns
import React, { useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'


export default function UsingState() {

    // snippet: useS
    const [name, setName] = useState("shaun");
    const [person, setPerson] = useState({ name: 'mario', age: 40 })
    // snippet:nfn
    const clickHandler = () => {
        setName('chun-li');
        setPerson({ name: 'luigi', age: 45 });
    }
    return (
        <View>
            <Text style={styles.state}>/--- Using State ---/</Text>
            <Text>My name is {name}</Text>
            <Text>His name is {person.name} and his {person.age}</Text>
            <View>
                <Button title='update state' onPress={clickHandler}></Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    state: {
        marginTop: 20,
        fontWeight: 'bold'

    },
})
