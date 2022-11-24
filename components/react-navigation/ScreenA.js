import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

const ScreenA = ({ navigation }) => {
    
    const onPressHandler = () => {
        navigation.navigate('Screen_B')
        // navigation.goBack()
        // navigation.replace('Screen_B')
    }
    /*
        Case 1 :- When using "navigation.navigate('Screen_B')" in screen_A
        On the Screen_B header you will see a back button but not on Screen_A, Its because Screen_B is behind Screen_A in the stack and 
        nothing is behind Screen_A in the stack. So on the Screen_B we can use "navigation.goBack()" also inplace of "navigation.navigate('Screen_A')"
        as Screen_A is behind Screen_B in the stack but we can't use "navigation.goBack()" on Screen_A as no other screen is behind Screen_A.
        
        Case 2 :- When using "navigation.goBack()" in screen_A
        We can't use otherwise it will throw console error as no other screen is behind Screen_A in the stack.

        Case 3 :- When using "navigation.replace('Screen_B')" in screen_A
        It destroys the stack and navigate to the desired screen in a new stack. So if we use "navigation.replace('Screen_B')" in Screen_A then
        we can't use "navigation.goBack()" on Screen_B as there is no screen in the stack in such cases.
        
        ### Note that navigation.replace('Screen_B') will work with 'Stack' navigation only and not with 'Bottom Tabs' navigation.
     */
    return (
        <View style={styles.body}>
            <Text style={styles.text}>Screen A</Text>
            <Pressable
                onPress={onPressHandler}
                style={({ pressed }) => ({ backgroundColor: pressed ? '#ddd' : '#fcf400', paddingVertical: 5, paddingHorizontal: 10, borderRadius: 20 })}
            >
                <Text style={styles.text}>Go to Screen B</Text>
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

export default ScreenA