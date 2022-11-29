import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

const Screen1 = ({ navigation, route }) => {
    //To get Params from Screen 2.
    const message = route.params?.Message;

    const onPressHandler = () => {
        navigation.navigate('Screen_2', { ItemName: 'Updated item From Screen 1', ItemId: 19 })
        /*
        Above code will work fine and you can get ItemName and ItemId in Screen 2 using route.params.
        But it will work only if you go to Screen 2 by pressing the "Go to Screen 2" button(i.e. pressable).
        If you go to Screen 2 directly from the drawer for the first time(i.e. after your application is loaded 
        you directly clicked the Screen 2 button from the Drawer menu) you will get error. However If after your 
        app is loaded and you pressed "Go to Screen 2" button(i.e. pressable) to Go to screen 2 and then return back 
        to Screen 1 and now if you Go to Screen 2 by using Drawer menu then you will not get error as in this case when 
        you first time visited Screen 2 using "Go to Screen 2" button(i.e. pressable) then only value of ItemName and ItemId 
        was set in Screen 2.
    
        So it will be better that instead of passing parameters from Screen 1 to Screen 2, we set the initial paramter for screen 2
        using 'initialParams' props in the <Drawer.Screen> section of Screen 2. This way we will be able to get parameters in every situation.
        However if we want to pass some updated values when user navigate from screen 1 to screen 2 then we can pass params as 
        above as well, note that we have not removed 'initialParams' props in the <Drawer.Screen> section of Screen 2 to ensure that we have access 
        to ItemName and ItemId parameters in every situation. However if we don't have requirement to pass any updated value from Screen 1, then we can
        navigate to Screen 2 as follows also.   
        */
        navigation.navigate('Screen_2')
    }

    return (
        <View style={styles.body}>
            <Text style={styles.text}>Screen 1</Text>
            <Pressable
                onPress={onPressHandler}
                style={({ pressed }) => ({ backgroundColor: pressed ? '#ddd' : '#fcf400', paddingVertical: 5, paddingHorizontal: 10, borderRadius: 20 })}
            >
                <Text style={styles.text}>Go to Screen 2</Text>
            </Pressable>
            {message && (<Text style={{ fontSize: 18, fontWeight: '500' }}>{message}</Text>)}
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

export default Screen1