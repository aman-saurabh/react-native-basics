import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import InputComponent from './child-components/component14/InputComponent'

//Using child component and passing data as props into that.

const Component14 = () => {
    const [name, setName] = useState('');
    const [show, setShow] = useState(false);
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Please enter your name </Text>
            <InputComponent name={name} setName={setName} showName={show} setShowName={setShow} />
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
        justifyContent: 'center'
    },
    text: {
        fontSize: 20,
        fontWeight: '700',
        margin: 10,
        color: '#000'
    }
})

export default Component14