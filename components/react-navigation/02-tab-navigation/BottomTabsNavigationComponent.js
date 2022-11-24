import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ScreenA from '../ScreenA';
import ScreenB from '../ScreenB';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

//'Bottom Tab' navigation
//It creates tabs in the bottom of the screens and we can use those tabs to move between screens.

/*
    'tabBarIcon', 'tabBarActiveTintColor', 'tabBarBadge' etc. are 'options' that can be used to configure the screens in the navigator. 
    These can be specified under 'screenOptions' prop of Tab.navigator or 'options' prop of Tab.Screen.
*/

const Tab = createBottomTabNavigator();

const BottomTabsNavigationComponent = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, size, color }) => {
                        let iconName;
                        if (route.name === 'Screen_A') {
                            iconName = 'autoprefixer'
                        } else if (route.name === 'Screen_B') {
                            iconName = 'btc'
                        }

                        size = focused ? 25 : 20;
                        color = focused ? '#fcba03' : '#f52f02';
                        return (
                            <FontAwesome5
                                name={iconName}
                                size={size}
                                color={color}   // It will color only tab icons and not tab labels
                            />
                        )
                    },
                    //tabBarIconStyle: {display: 'none'},     //If you don't want to use any icon. By default a cross type icon is added. So if you don't want icon then you will have to remove that manually.
                    tabBarActiveTintColor: '#fcba03',         // It will color only active tab labels and not the tab icons 
                    tabBarInactiveTintColor: '#f52f02',       // It will color only inactive tab labels and not tab icons 
                    tabBarActiveBackgroundColor: '#66645f',
                    tabBarInactiveBackgroundColor: '#b3afa6',
                    //tabBarShowLabel: false,
                    tabBarLabelPosition: 'beside-icon',       //Default is 'below-icon'
                    tabBarLabelStyle: {fontWeight: '900', fontSize: 14, fontStyle: 'italic'}
                })}
            >
                <Tab.Screen
                    name='Screen_A'
                    component={ScreenA}
                    options={{tabBarBadge: 3}}
                />
                <Tab.Screen
                    name='Screen_B'
                    component={ScreenB}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default BottomTabsNavigationComponent