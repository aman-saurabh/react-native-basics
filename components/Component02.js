import React, { useReducer } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

// Changing state using useState and useReducer. However here we havn't used useState
// but we can understand from the implementation of useReducer that it also works in same way.
const allStates = [
    { name: 'Aman', city: 'Patna' },
    { name: 'Gitika', city: 'Noida' }
]

const initialState = allStates[1]

const reducer = (state, action) => {
    switch (action.type) {
        case "change":
            return allStates.find(e => e.name != state.name);
        default:
            return allStates[1]
    }
}

const Component02 = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <View style={styles.container}>
            <Text style={styles.text}>User name is : {state.name}</Text>
            <Text style={styles.text}>User location is : {state.city}</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => dispatch({type: 'change'})}
            >
                <Text style={styles.text}>Change</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f56ff5'
    },
    text: {
        color: 'white',
        fontSize: 20,
        fontWeight: '700',
        margin: 10
    },
    button: {
        backgroundColor: 'blue',
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 10
    }
})

export default Component02