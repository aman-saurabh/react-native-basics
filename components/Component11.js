import React, { useState } from 'react'
import { Alert, Pressable, StyleSheet, Text, TextInput, ToastAndroid, View } from 'react-native'

//Alert and Toast Message

const Component11 = () => {
    const [name, setName] = useState('');
    const [show, setShow] = useState(false);

    const onPress = () => {
        if (name.length > 3) {
            setShow(true)
        } else {
            // In Android we can have maximum 3 buttons(like ok, cancel etc. in this case) but in IOS we can have many buttons.
            // 'cancelable' is used to set if we press outside alert box then alert should be cancelled or not.

            // Alert.alert('Warning', 'The name must be longer than 3 characters',
            //     [
            //         {
            //             text: 'Do not show again',
            //             onPress: () => console.warn('Do not show again pressed')
            //         },
            //         {
            //             text: 'Ok',
            //             onPress: () => console.warn('OK pressed')
            //         },
            //         {
            //             text: 'Cancel',
            //             onPress: () => console.warn('Cancel pressed')
            //         }
            //     ],
            //     {
            //         cancelable: true,
            //         onDismiss: () => console.warn('Alert Dismissed')
            //     }
            // )

            //ToastAndroid.show(message, duration)
            //Here 'duration' means display time - Available options - ToastAndroid.SHORT, ToastAndroid.LONG
            // ToastAndroid.show(
            //     "The name must be longer than 3 characters",
            //     ToastAndroid.LONG,
            // );

            //ToastAndroid.showWithGravity(message, duration, gravity)
            //Here 'gravity' means position- Available options - ToastAndroid.TOP, ToastAndroid.BOTTOM, ToastAndroid.CENTER 
            //In latest versions of Android gravity and offset are not working and toast are displayed in the bottom always, however duration is working properly.  

            // ToastAndroid.showWithGravity(
            //     "The name must be longer than 3 characters",
            //     ToastAndroid.LONG,
            //     ToastAndroid.CENTER
            // )

            //ToastAndroid.showWithGravityAndOffset(message, duration, gravity, xOffset, yOffset)
            //Here xOffset, yOffset means distance from left and top respectively. For default view use 0 for both.
            ToastAndroid.showWithGravityAndOffset(
                "The name must be longer than 3 characters",
                ToastAndroid.LONG,
                ToastAndroid.CENTER,
                100,
                200
            );
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Please Enter your name</Text>
            <TextInput
                style={styles.input}
                placeholder='e.g. Aman'
                onChangeText={(value) => setName(value)}
            />
            <Pressable
                onPress={onPress}
                style={styles.button}
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

export default Component11