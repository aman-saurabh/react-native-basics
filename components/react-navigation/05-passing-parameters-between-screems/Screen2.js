import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

const Screen2 = ({ navigation, route }) => {
    //To get params from screen 1 or params which are passed as 'initialParams' from <Drawer.Screen>.
    const { ItemName, ItemId } = route.params;

    const onPressHandler = () => {
        navigation.navigate('Screen_1', {Message: 'Response From Screen 2'})

        // We can use navigation.setParams(as follows) to update params value. 
        // navigation.setParams({ ItemId: 18 })
    }

    return (
        <View style={styles.body}>
            <Text style={styles.text}>Screen 2</Text>
            <Pressable
                onPress={onPressHandler}
                style={({ pressed }) => ({ backgroundColor: pressed ? '#ddd' : '#00fa21', paddingVertical: 5, paddingHorizontal: 10, borderRadius: 20 })}
            >
                <Text style={styles.text}>Go back to Screen 1</Text>
            </Pressable>
            <Text style={{ fontSize: 18, fontWeight: '500' }}>Item id : {ItemId}</Text>
            <Text style={{ fontSize: 18, fontWeight: '500' }}>Item name : {ItemName}</Text>
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

export default Screen2