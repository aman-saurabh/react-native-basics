import { NavigationContainer } from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React from 'react'
import ScreenA from '../ScreenA'
import ScreenB from '../ScreenB'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const Tab = createMaterialBottomTabNavigator();

const MaterialBottomTabsNavigationComponent = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
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
                    tabBarColor: route.name == 'Screen_A' ? '#000' : '#3c0382'
                    //It will change the color of entire tab according to the above mentioned value.
                    //But note that it works only when "shifting={true}" is set. 
                })}
                activeColor='#fcba03'
                inactiveColor='#f52f02'
                barStyle={{ backgroundColor: '#b3afa6', margin: 10 }}
                shifting={true}         //Whether the shifting style is used, the active tab icon shifts up to show the label and the inactive tabs won't have a label. By default, this is true when you have more than 3 tabs otherwise false.
                //labeled={false}
            >
                <Tab.Screen
                    name='Screen_A'
                    component={ScreenA}
                    options={{
                        tabBarLabel: 'Screen 1',
                        tabBarBadge: 3
                    }}
                />
                <Tab.Screen
                    name='Screen_B'
                    component={ScreenB}
                    options={{
                        tabBarLabel: 'Screen 2'
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default MaterialBottomTabsNavigationComponent