import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

const ScreenB = ({ navigation }) => {
    /*
        to understand when we can use "navigation.navigate('Screen_A')"", when we can use "navigation.goBack()" 
        and when we can use "navigation.replace('Screen_A')" check Screen_A for details.
    */
    const onPressHandler = () => {
        navigation.navigate('Screen_A')
        // navigation.goBack();
        // navigation.replace('Screen_A')
    }
    return (
        <View style={styles.body}>
            <Text style={styles.text}>Screen B</Text>
            <Pressable
                onPress={onPressHandler}
                style={({ pressed }) => ({ backgroundColor: pressed ? '#ddd' : '#00fa21', paddingVertical: 5, paddingHorizontal: 10, borderRadius: 20 })}
            >
                <Text style={styles.text}>Go back to Screen A</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 30,
        fontWeight: '700',
        margin: 10
    }
})

export default ScreenB