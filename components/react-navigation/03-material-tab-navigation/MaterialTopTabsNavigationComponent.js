import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import ScreenA from '../ScreenA'
import ScreenB from '../ScreenB'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const Tab = createMaterialTopTabNavigator();

const MaterialTopTabsNavigationComponent = () => {
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
                    tabBarShowIcon: true,       //It is default to false in MaterialTopTabsNavigation
                    tabBarShowLabel: true,      //It is default to true
                    tabBarActiveTintColor: '#fcba03',
                    tabBarInactiveTintColor: '#f52f02',
                    tabBarPressColor: '#fff',
                    // tabBarPressOpacity: 0,       // It is not making any effect even if we change tabBarPressColor to any other color.Don't know why.
                    // tabBarScrollEnabled: true    // To make the tab bar scrollable.
                    tabBarIconStyle: { backgroundColor: 'pink', width: 40, flex: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 10 },
                    tabBarLabelStyle: { fontSize: 16, fontWeight: '700' },
                    tabBarItemStyle: { width: 125, borderWidth: 2, borderColor: 'white' },
                    tabBarStyle: { backgroundColor: route.name == 'Screen_A' ? '#000' : '#3c0382' },              //If you want to style individual tabs then use 'tabBarItemStyle' and if you want same style in entire top tab bar then use tabBarStyle,
                    swipeEnabled: true         //You can switch between pages by swipping also if it is set to true. By default also it is true.
                })}
            >
                <Tab.Screen
                    name='Screen_A'
                    component={ScreenA}
                    options={{
                        tabBarLabel: 'Screen 1'
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

export default MaterialTopTabsNavigationComponent