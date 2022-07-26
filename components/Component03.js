import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


const Component03 = () => {
    return (
        <View style={styles.container}>
            <View style={styles.view1}>
                <Text style={styles.text}>1</Text>
            </View>
            <View style={styles.view2}>
                <Text style={styles.text}>2</Text>
            </View>
            <View style={styles.view3}>
                <Text style={styles.text}>3</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row-reverse',
        //default flexDirection is 'column' 
        backgroundColor: "#00dffc",
        alignItems: 'center',
        justifyContent: 'center'
    },
    view1: {
        height: 100,
        // width: 100,
        flex: 3,
        backgroundColor: '#fc008b',
        alignItems: 'center',
        justifyContent: 'center'
    },
    view2: {
        height: 100,
        // width: 100,
        flex: 3,
        backgroundColor: '#fcec00',
        alignItems: 'center',
        justifyContent: 'center'
    },
    view3: {
        height: 100,
        // width: 100,
        flex: 3,
        backgroundColor: '#00fc15',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'white',
        fontSize: 35,
        margin: 10,
        fontWeight: '700',
        fontStyle: 'italic'
    }
})

export default Component03