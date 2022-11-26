import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import ScreenA from '../ScreenA';
import ScreenB from '../ScreenB';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const Drawer = createDrawerNavigator();

const DrawerNavigationComponent = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                initialRouteName="Screen_B"
                defaultStatus="open"
                //The default status of the drawer - whether the drawer should stay open or closed by default.
                screenOptions={({ route }) => ({
                    headerShown: true,               //Whether to show or hide the header for the screen. Defaults to true
                    //drawerPosition: 'right',        //Options are left or right. Defaults to left
                    //drawerType: 'slide',            //Options are "back", "front", "slide" and "permanent"
                    drawerHideStatusBarOnOpen: true,
                    overlayColor: '#00000050',        //Background screen color when Drawer is open. If you want to set overlay with opacity then write colow as "#00000050". Here last 2 digits(i.e. 50 in this case) represents opacity(in range of 00 - 99).
                    swipeEnabled: false,              //Whether you can use swipe gestures to open or close the drawer. Defaults to true. Swipe gesture is not supported on Web. 
                    gestureEnabled: false,            //Whether you can use gestures to open or close the drawer. Setting this to false disables swipe gestures as well as tap on overlay to close.
                    //swipeEnabled and gestureEnabled settings are not working
                    drawerStyle: {                    //Style object for the drawer component. You can pass a custom background color for a drawer or a custom width here.
                        backgroundColor: '#c6cbef',
                        width: 300,
                    },
                    drawerLabelStyle: {
                        fontSize: 20,
                        fontWeight: '500',
                        fontStyle: 'italic'
                    },
                    headerTitleAlign: 'center',
                    headerStyle: {
                        height: 80,
                        backgroundColor: '#0080ff'
                    },
                    headerTitleStyle: {
                        color: '#f5b',
                        fontSize: 35,
                        fontWeight: '700'
                    },
                    drawerActiveTintColor: 'red',       //Color for the icon and label in the active items in the drawer.
                    drawerInactiveTintColor: 'navy',    //Color for the icon and label in the inactive items in the drawer.
                    drawerActiveBackgroundColor: 'yellow',      //Background color for the active item in the drawer.
                    drawerInactiveBackgroundColor: '#f5bb78'    //Background color for the inactive items in the drawer.


                })}
                drawerPosition="right"
            >
                <Drawer.Screen
                    name='Screen_A'
                    component={ScreenA}
                    options={{
                        title: 'Screen A Title',
                        drawerIcon: ({ focused }) => (
                            <FontAwesome5
                                name="autoprefixer"
                                size={focused ? 25 : 20}
                                color={focused ? 'red' : 'navy'}   // It will color only tab icons and not tab labels.
                            ></FontAwesome5>
                        )
                    }}
                />
                <Drawer.Screen
                    name='Screen_B'
                    component={ScreenB}
                    options={{
                        title: 'Screen B Title',
                        drawerIcon: ({ focused }) => (
                            <FontAwesome5
                                name="btc"
                                size={focused ? 25 : 20}
                                color={focused ? 'red' : 'navy'}   // It will color only tab icons and not tab labels
                            ></FontAwesome5>
                        )
                    }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default DrawerNavigationComponent