import React, { useState } from 'react'
import { RefreshControl, SectionList, StyleSheet, Text, View } from 'react-native'
//SectionList with nested array

const data = [
    {
        title: 'Title 1',
        data: ['Item 1-1', 'Item 1-2', 'Item 1-3']
    },
    {
        title: 'Title 2',
        data: ['Item 2-1']
    },
    {
        title: 'Title 3',
        data: ['Item 3-1']
    },
    {
        title: 'Title 4',
        data: ['Item 4-1', 'Item 4-2', 'Item 4-3']
    },
    {
        title: 'Title 5',
        data: ['Item 5-1', 'Item 5-2']
    },
]

const getRandomInt = () => {
    return Math.floor(Math.random() * 4);
}

const Component07 = () => {
    const [items, setItems] = useState(data);
    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = () => {
        setRefreshing(true);
        let num = getRandomInt();
        num = num == 0 ? 1 : num;
        const count = items.length+1;
        const title = `Title ${count}`
        let data = [];
        for (i = 0; i < num; i++) {
            let s = `Item ${count}-${i + 1}`
            data[i] = s;
        }
        setTimeout(() => {
            setItems([...items, { title, data }]);
            setRefreshing(false);
        }, 1000);

    }
    return (
        <View style={styles.container}>
            <SectionList
                keyExtractor={(item, index) => index}
                sections={items}
                renderItem={({ item }) => (
                    //In case of SectionList "item" here refer to internal array item i.e. "items inside data"
                    <View style={styles.item}>
                        <Text style={styles.text}>{item}</Text>
                    </View>
                )}
                renderSectionHeader={({ section }) => (
                    <View style={styles.section}>
                        <Text style={styles.sectionText}>{section.title}</Text>
                    </View>
                )}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        colors={['#2ad568', 'red', 'yellow']} />
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 35,
        marginHorizontal: 10
    },
    item: {
        marginVertical: 5,
        backgroundColor: '#4ae1fa'
    },
    text: {
        fontSize: 25,
        fontWeight: '700',
        fontStyle: 'italic',
        color: '#000',
        margin: 15,
    },
    section: {
        marginVertical: 10,
        backgroundColor: '#fc0335',
        alignItems: 'center',
    },
    sectionText: {
        fontSize: 35,
        fontWeight: '700',
        color: '#fff',
        margin: 20,
    }
})

export default Component07