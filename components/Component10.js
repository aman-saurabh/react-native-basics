import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'

// Pressable

const Component10 = () => {
    const [name, setName] = useState('');
    const [show, setShow] = useState(false);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Please Enter your name</Text>
            <TextInput
                style={styles.input}
                placeholder='e.g. Aman'
                onChangeText={(value) => setName(value)}
            />
            {/* In Pressable we have several features
                onLongPress = It is simila to 'onPress' but it is triggered only if we continuously press 'Pressable' button for 'delayLongPress' milli seconds.
                delayLongPress = Default value for 'onLongPress' trigger time is 500ms. We can change it using 'delayLongPress' attribute.
                hitSlop = Sets additional distance outside of element in which a press can be detected. For example -> hitSlop={{bottom: 20}} means if we click upto 20px below the button then also button press event will be triggered.
                android_ripple = It creates the ripple effect in android devices only.Not a necessary or very useful attribute.
            */}
            <Pressable
                onPress={() => setShow(!show)}
                // onLongPress={() => setShow(!show)}
                // delayLongPress={1000}
                hitSlop={{ left: 20, right: 20, bottom: 20 }}
                disabled={name == '' && !show}
                android_ripple={{color: '#068a01'}}
                // style={styles.button}
                style={({ pressed }) => [
                    styles.button,
                    { backgroundColor: pressed ? '#fa006c' : '#00f6fa' },
                ]}
            >
                <Text style={styles.buttonText}>{show ? 'Hide Name' : 'Show Name'}</Text>
            </Pressable>

            {show && (
                <Text style={styles.text}>Your name is : {name}</Text>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 35,
        alignItems: 'center',
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold',
        margin: 20
    },
    input: {
        borderWidth: 3,
        borderColor: '#fcba03',
        borderRadius: 5,
        fontSize: 20,
        width: 200,
        padding: 10,
        marginBottom: 20
    },
    button: {
        paddingVertical: 8,
        paddingHorizontal: 25,
        borderRadius: 20,
        backgroundColor: '#00fa21'
    },
    buttonText: {
        color: 'white',
        fontSize: 25,
        fontWeight: '700'
    }
})

export default Component10