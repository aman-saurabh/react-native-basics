import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ScreenA from '../ScreenA';
import ScreenB from '../ScreenB';

//'Bottom Tab' navigation
//It creates tabs in the bottom of the screens and we can use those tabs to move between screens.

const Tab = createBottomTabNavigator();

const TabBottomNavigationComponent = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name='Screen_A'
                    component={ScreenA}
                />
                <Tab.Screen
                    name='Screen_B'
                    component={ScreenB}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default TabBottomNavigationComponent