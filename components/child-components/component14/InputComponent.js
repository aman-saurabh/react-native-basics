import React from 'react'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'

// Used in "Component14.js" file

/*
Here we have used object destructuring, so you don't find 'props' keyword in this file.
So here you can use 'props' also inplace of { name, setName, showName, setShowName } 
and then use 'name', 'setShowName' etc. as 'props.name', 'props.setShowName' etc. 
*/
const InputComponent = ({ name, setName, showName, setShowName }) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder='e.g. Aman'
                onChangeText={(value) => setName(value)}
            />
            <Pressable
                onPress={() => setShowName(!showName)}
                style={styles.button}
                disabled={name == '' && !showName}
            >
                <Text style={styles.buttonText}>{showName ? 'Hide' : 'Show'} name</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        borderWidth: 2,
        borderColor: '#fcba03',
        padding: 10,
        width: 300,
        fontSize: 20,
        marginBottom: 20
    },
    button: {
        backgroundColor: '#fc001d',
        paddingVertical: 10,
        paddingHorizontal: 25,
        width: '100%',
        borderRadius: 20,
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 25,
        fontWeight: '700',
        color: 'white'
    }
})

export default InputComponent