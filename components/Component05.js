import React, { useReducer, useState } from 'react'
import { RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native'

//List, ScrollView and RefreshControl
/*
    It not necessary try to use FlatList over ScrollView.
    Check "Component06" for more details and advantage of FlatList over ScrollView.
*/
const initialState = [
    { key: 1, item: 'Item 1' },
    { key: 2, item: 'Item 2' },
    { key: 3, item: 'Item 3' },
    { key: 4, item: 'Item 4' },
    { key: 5, item: 'Item 5' },
    { key: 6, item: 'Item 6' },
    { key: 7, item: 'Item 7' },
    { key: 8, item: 'Item 8' },
    { key: 9, item: 'Item 9' },
    { key: 10, item: 'Item 10' },
    { key: 11, item: 'Item 11' },
    { key: 18, item: 'Item 18' },
    { key: 91, item: 'Item 91' }
];

const getRandomInt = () => {
    return Math.floor(Math.random() * 999);
}

const reducer = (state, action) => {
    switch (action.type) {
        case "add":
            let num = getRandomInt();
            let uniqueNumFound = false;
            while (!uniqueNumFound) {
                let s = state.find(e => e.key == num);
                if (!s) {
                    uniqueNumFound = true;
                } else {
                    num = getRandomInt();
                }
            }
            return [...state, { key: num, item: `Item ${num}` }];
        default:
            return state;
    }
}

const Component05 = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
            dispatch({ type: 'add' });
            setRefreshing(false);
        }, 2000);
    }
    return (
        <View style={styles.container}>
            {/* Vertical scroll list */}
            {/* <ScrollView>
                {state.map(i => (
                    <View style={styles.item} key={i.key}>
                        <Text style={styles.text}>{i.item}</Text>
                    </View>
                ))}
            </ScrollView> */}
            {/* Horizontal scroll list */}
            {/* <ScrollView horizontal={true}>
                {state.map(i => (
                    <View style={styles.item} key={i.key}>
                        <Text style={styles.text}>{i.item}</Text>
                    </View>
                ))}
            </ScrollView> */}
            {/* using "refreshControl" prop for refresh (refresh page on scrolling on 
                the top like new results load in youtube or google mobile apps)*/}
            <ScrollView refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    colors={['#2ad568', 'red', 'yellow']}
                />
            }>
                {state.map(i => (
                    <View style={styles.item} key={i.key}>
                        <Text style={styles.text}>{i.item}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    item: {
        margin: 10,
        backgroundColor: '#4ae1fa',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 30,
        fontWeight: '700',
        fontStyle: 'italic',
        color: '#000',
        margin: 20,
    }
})

export default Component05