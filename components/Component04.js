import React from 'react'
import {StyleSheet, Text, View } from 'react-native'

const Component04 = () => {
    return (
        <View style={styles.container}>
            <View style={styles.t1}>
                <View style={styles.t11}>
                    <Text style={styles.text}>1</Text>
                </View>
                <View style={styles.t12}>
                    <Text style={styles.text}>2</Text>
                </View>
                <View style={styles.t13}>
                    <Text style={styles.text}>3</Text>
                </View>
            </View>
            <View style={styles.t2}>
                <Text style={styles.text}>4</Text>
            </View>
            <View style={styles.t3}>
                <Text style={styles.text}>5</Text>
            </View>
            <View style={styles.t4}>
                <View style={styles.t41}>
                    <Text style={styles.text}>6</Text>
                </View>
                <View style={styles.t42}>
                    <Text style={styles.text}>7</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 30
    },
    t1: {
        flex: 1,
        flexDirection: 'row'
    },
    t2: {
        flex: 1,
        width: '100%',
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
    t3: {
        flex: 1,
        width: '100%',
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
    },
    t4: {
        flex: 7,
        flexDirection: 'row'
    },
    t11: {
        flex: 1,
        backgroundColor: '#00f4fc',
        alignItems: 'center',
        justifyContent: 'center',
    },
    t12: {
        flex: 2,
        backgroundColor: '#fc00b1',
        alignItems: 'center',
        justifyContent: 'center',
    },
    t13: {
        flex: 3,
        backgroundColor: '#fcec00',
        alignItems: 'center',
        justifyContent: 'center',
    },
    t41: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    t42: {
        flex: 1,
        backgroundColor: '#005dfc',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 30,
        fontWeight: '700',
    }
})

export default Component04