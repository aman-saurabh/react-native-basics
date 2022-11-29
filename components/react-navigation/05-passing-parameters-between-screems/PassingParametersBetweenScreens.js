import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import Screen1 from './Screen1';
import Screen2 from './Screen2';

const Drawer = createDrawerNavigator();

const PassingParametersBetweenScreens = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen
                    name='Screen_1'
                    component={Screen1}
                />
                <Drawer.Screen
                    name='Screen_2'
                    component={Screen2}
                    initialParams={{ ItemName: 'Item From Screen 1', ItemId: 12 }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default PassingParametersBetweenScreens
