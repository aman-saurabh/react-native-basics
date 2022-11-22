import React, { useReducer, useState } from 'react'
import { FlatList, RefreshControl, StyleSheet, Text, View } from 'react-native';
//FlatList.
/*
    <ScrollView> vs <FlatList> - which one to use?
    ScrollView renders all its react child components at once, but this has a performance 
    downside. Imagine you have a very long list of items you want to display, maybe several 
    screens worth of content. Creating JS components and native views for everything all at 
    once, much of which may not even be shown, will contribute to slow rendering and 
    increased memory usage.
    This is where FlatList comes into play. FlatList renders items lazily, when they are 
    about to appear, and removes items that scroll way off screen to save memory and 
    processing time. FlatList is also handy if you want to render separators between your 
    items, multiple columns, infinite scroll loading, or any number of other features it 
    supports out of the box.
*/

const initialState = [
    { key: '1', item: 'Item 1' },
    { key: '2', item: 'Item 2' },
    { key: '3', item: 'Item 3' },
    { key: '4', item: 'Item 4' },
    { key: '5', item: 'Item 5' },
    { key: '6', item: 'Item 6' },
    { key: '7', item: 'Item 7' },
    { key: '8', item: 'Item 8' },
    { key: '9', item: 'Item 9' },
    { key: '10', item: 'Item 10' },
    { key: '11', item: 'Item 11' },
    { key: '18', item: 'Item 18' },
    { key: '91', item: 'Item 91' }
    //have to change key into string as FlatList accepts only string value 
];

// const initialState = [
//     { item: 'Item 1' },
//     { item: 'Item 2' },
//     { item: 'Item 3' },
//     { item: 'Item 4' },
//     { item: 'Item 5' },
//     { item: 'Item 6' },
//     { item: 'Item 7' },
//     { item: 'Item 8' },
//     { item: 'Item 9' },
//     { item: 'Item 10' },
//     { item: 'Item 11' },
//     { item: 'Item 18' },
//     { item: 'Item 91' }
// ];

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
const Component06 = () => {
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
            {/* <FlatList
                data={state}
                keyExtractor={(item, index) => index}   
                //remove "keyExtractor" prop if there is "key" property in your list
                renderItem={ ({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.text}>{item.item}</Text>
                    </View>
                )}
            /> */}
            {/* Notes :-
                1.) In FlatList renderItem each item iterarte in "({ item })" object only. 
                You can't change it. Even if you change it to "item" or "(item)" or 
                "({ i })". You will get error. So use it as it is always.
                2.) Here we haven't used "key" in the FlatList anywhere but there should 
                be a "key" property in your array if you want to use FlatList as above. 
                Incase "key" property is not there in your list then you can use 
                "keyExtractor" property to assign a key as follows :
                --------------------------------------------------
                keyExtractor={(item, index) => index}
                --------------------------------------------------
                Actually react-native official documentation says that - "By default, the 
                list looks for a key prop on each item and uses that for the React key. 
                Alternatively, you can provide a custom "keyExtractor" prop".
                But I used FlatList without "key" property in list and even without 
                "keyExtractor" and it worked fine. So can't say whether it is mandatory or 
                not hence recommended to use either one of these. 
            */}
            {/* Using "numColumns" prop with Flatlist to create multiple columns */}
            {/* <FlatList
                numColumns={2}
                data={state}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.text}>{item.item}</Text>
                    </View>
                )}
            /> */}
            {/* Using "horizontal" prop with Flatlist to render list horizontally - left to right */}
            {/* <FlatList
                horizontal={true}
                //"horizontal" don't work with "numColumns" so don't use both together
                data={state}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.text}>{item.item}</Text>
                    </View>
                )}
            /> */}
            {/* Using "inverted" prop with "horizontal" prop to render list horizontally - right to left */}
            {/* <FlatList
                horizontal
                inverted
                //By default horizontal render from left to right. You need to use "inverted"
                //prop if you want to render it from right to left 
                data={state}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.text}>{item.item}</Text>
                    </View>
                )}
            /> */}
            {/* using "refreshControl" prop for refresh (refresh page on scrolling on 
                the top like new results load in youtube or google mobile apps)*/}
            <FlatList
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        colors={['#2ad568', 'red', 'yellow']} />
                }
                data={state}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.text}>{item.item}</Text>
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30
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

export default Component06