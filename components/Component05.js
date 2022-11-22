import React, { useReducer, useState } from 'react'
import { RefreshControl, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

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
        case "reset":
            return initialState;
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
            dispatch({ type: 'reset' });
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
            {/* <RefreshControl component is used inside a ScrollView or ListView to add "pull to refresh" functionality. 
            When the ScrollView is at scrollY: 0(i.e. at top), swiping down triggers an 'onRefresh' event. */}
            <ScrollView refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    colors={['#2ad568', 'red', 'yellow']}
                    // Color of refresh indicator changes between the given colors in the array. 
                    // If you can't see then increase the refresh time in 'onRefresh' method.
                />
            }>
                {state.map(i => (
                    <View style={styles.item} key={i.key}>
                        <Text style={styles.text}>{i.item}</Text>
                    </View>
                ))}
                <View style={styles.buttonWrapper}>
                    <TouchableOpacity style={styles.button} onPress={() => dispatch({ type: 'add' })}>
                        <Text style={styles.buttonText}>Add Item</Text>
                    </TouchableOpacity>
                </View>
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
    },
    buttonWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    button: {
        backgroundColor: '#fc0341',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 30,
    },
    buttonText: {
        color: '#fff',
        fontSize: 25,
        fontWeight: '700'
    }
})

export default Component05