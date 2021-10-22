//snippet: rfns
import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

export default function FlatListComp() {

    //snippet: useS
    const [people, setPeople] = useState([
        { name: 'name1', id: 1 },
        { name: 'name2', id: 2 },
        { name: 'name3', id: 3 },
        { name: 'name4', id: 4 },
        { name: 'name5', id: 5 },
        { name: 'name6', id: 6 },
        { name: 'name7', id: 7 },
        { name: 'name1', id: 8 },
        { name: 'name2', id: 9 },
        { name: 'name3', id: 10 },
        { name: 'name4', id: 11 },
        { name: 'name5', id: 12 },
        { name: 'name6', id: 13 },
        { name: 'name7', id: 14 },
    ])
    return (
        <View>
            <Text style={styles.state}>/--- FlatList Component ---/</Text>
            <FlatList
                numColumns={2}
                keyExtractor={(item) => item.id}
                data={people}
                renderItem={({ item }) => (
                    <Text style={styles.item}>{item.name}</Text>
                )

                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    state: {
        marginTop: 20,
        fontWeight: 'bold'

    },
    item: {
        marginTop: 24,
        padding: 30,
        backgroundColor: 'pink',
        fontSize: 24,
        marginHorizontal: 10,

    }
})
