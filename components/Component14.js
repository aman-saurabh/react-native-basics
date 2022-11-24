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
            {/* Here intentionally I have used showName={show}, we could have used show={show} also, which is more simple.
            But I used 'showName' inplace of 'show' in keyword just to show that it is not necessary that we use same keword as key. 
            But also note that here since we have passed 'show' data using 'showName' keyword, so in child component also we can 
            access this property as 'props.showName' only in the child component. If we try to access it as 'props.show' we will 
            get null as we are not passing any data with 'show' as key from here(i.e. from parent component.)*/}
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