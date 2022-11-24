import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import ScreenA from '../ScreenA';
import ScreenB from '../ScreenB';

//'Stack' navigation

/*
    The NavigationContainer is responsible for managing your app state and linking your top-level navigator to the app environment.

    The container takes care of platform specific integration and provides various useful functionality:

    1.) Deep link integration with the linking prop.
    2.) Notify state changes for screen tracking, state persistence etc.
    3.) Handle system back button on Android by using the BackHandler API from React Native.
*/

const Stack = createStackNavigator();

/*
    Case 1:- 
    If you don't want screen header on any particular screen then use following code in that particular screen section
    (i.e. inside <Stack.Screen> of that particular screen). You can do it for as many screens as you want.
    *******************************************
    options={{
        header: () => null
    }}
    *******************************************
    
    Case 2: -
    And if you don't want screen header on any screen then simply use following code in <Stack.Navigator> section itself 
    and thus no need to add above code in every <Stack.Screen>
    *******************************************
    screenOptions={{
        header: () => null
    }}
    *******************************************
*/

const StackNavigationComponent = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    header: () => null
                }}
            >
                <Stack.Screen
                    name='Screen_A'
                    component={ScreenA}
                    // options={{
                    //     header: () => null
                    // }}
                />
                <Stack.Screen
                    name='Screen_B'
                    component={ScreenB}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigationComponent