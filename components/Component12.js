import React, { useState } from 'react'
import { Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'

//Modal and How to create custom alert with Modal

const Component12 = () => {
    const [name, setName] = useState('');
    const [show, setShow] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const onPress = () => {
        if (name.length > 3) {
            setShow(true)
        } else {
            setShowModal(true)
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
            <Modal
                visible={showModal}
                transparent
                animationType='fade'        //Available options - 'slide', 'fade', 'none'.
                hardwareAccelerated         //It is used to increase the performance and works on Android only.
                onRequestClose={() => setShowModal(false)}
            >
                <View style={styles.modalWrapper}>
                    <View style={styles.modal}>
                        <View style={styles.modalTitleWrapper}>
                            <Text style={styles.modalTitle}>Warning!</Text>
                        </View>
                        <View style={styles.modalTextWrapper}>
                            <Text style={styles.modalText}>The name must be longer than 3 characters.</Text>
                        </View>
                        <View style={styles.modalButtonWrapper}>
                            <Pressable
                                style={styles.modalButton}
                                onPress={() => setShowModal(false)}
                                hitSlop={{ top: 10, left: 10, bottom: 10, right: 10 }}
                            >
                                <Text style={styles.modalButtonText}>OK</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
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
    },
    modalWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00000099'
    },
    modal: {
        width: 300,
        height: 300,
        borderRadius: 20,
        backgroundColor: '#3b3a3a'
    },
    modalTextWrapper: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    modalText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '400',
        textAlign: 'center'
    },
    modalTitleWrapper: {
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fcf400',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: '700'
    },
    modalButtonWrapper: {
        alignItems: 'center',
        marginBottom: 20
    },
    modalButton: {
        paddingVertical: 8,
        width: 100,
        borderRadius: 20,
        backgroundColor: '#fc001d',
        alignItems: 'center'
    },
    modalButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '700',
    },
})

export default Component12