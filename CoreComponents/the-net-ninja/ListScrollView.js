//snippet:rfns
import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'

export default function ListScrollView() {
    const [people, setPeople] = useState([
        { name: 'name1', key: '1' },
        { name: 'name2', key: '2' },
        { name: 'name3', key: '3' },
        { name: 'name4', key: '4' },
        { name: 'name5', key: '5' },
        { name: 'name6', key: '6' },
        { name: 'name7', key: '7' },
    ]);
    return (
        <View>
            <ScrollView>
                <Text style={styles.state}>/--- Lists & ScrollView ---/</Text>
                {people.map((item) => {
                    return (
                        <View key={item.key}>
                            <Text style={styles.item}>{item.name}</Text>
                        </View>
                    )
                })}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    state: {
        marginTop: 20,
        fontWeight: 'bold'

    },
    item: {
        marginTop: 27,
        padding: 20,
        backgroundColor: 'pink',
        fontSize: 27
    }
})
