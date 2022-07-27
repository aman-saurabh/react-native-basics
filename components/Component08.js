import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
// TextInput feature
/*
    TextInput class has many important props which you can use. Few important ones are
    maxLength, onChange, onBlur, onFocus, onPressIn, onPressOut, onScroll, 
    onSelectionChange, multiline, numberOfLines, secureTextEntry(for passwords)
    Apart from that one more important prop is "keyboardType" for which available options are :
    default
    number-pad
    decimal-pad
    numeric
    email-address
    phone-pad
    url
    visible-password(works on android only)
*/
const Component08 = () => {
    const [name, setName] = useState("");
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Please enter your name :</Text>
            <TextInput
                style={styles.input}
                placeholder="e.g. Aman"
                onChangeText={value => setName(value)}
                keyboardType= 'default'
                editable={true}
                maxLength={20}
                secureTextEntry={false}  //For passwords use "secureTextEntry" as 'true
            />
            {name != "" && (
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
        borderWidth: 1,
        borderColor: '#878282',
        borderRadius: 5,
        fontSize: 20,
        width: 200,
        padding: 10
    }
})

export default Component08
//Completed till 1:36