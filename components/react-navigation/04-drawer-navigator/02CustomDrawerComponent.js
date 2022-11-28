import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { Image, Linking, Text, TouchableOpacity, View } from 'react-native';
import ScreenA from '../ScreenA';
import ScreenB from '../ScreenB';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            {/* <DrawerItemList> represents all screens which we have defined inside <Drawer.Navigator> inside <NavigationContainer>*/}
            <DrawerItemList {...props} />
            {/* Following are custom items we are adding as the drawer content. So in the drawer you will see there are total 4 items. 2 Drawer Screens(defined inside <Drawer.Navigator>) and 2 for following items*/}
            <DrawerItem label="Github" onPress={() => Linking.openURL('https://github.com')} />
            <DrawerItem label="Help" onPress={() => alert('Link to help')} />
        </DrawerContentScrollView>
    )
}

const Footer = () => {
    return (
        <TouchableOpacity style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 20,
            backgroundColor: '#909396',
            padding: 20
        }}>
            <Text style={{ fontSize: 20, fontWeight: '700', textAlign: 'center' }}>Logout</Text>
        </TouchableOpacity>
    )
}

const CustomDrawerContentWithHeaderAndFooter = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                {/* Header Section */}
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: 20,
                    backgroundColor: '#909396',
                    marginBottom: 20
                }}>
                    <View>
                        <Text style={{ fontSize: 20, fontWeight: '700' }}>John Doe</Text>
                        <Text style={{ fontSize: 15, fontWeight: '700' }}>john.doe@gmail.com</Text>
                    </View>
                    <Image
                        source={{ uri: 'https://images.unsplash.com/photo-1669616923428-1513f6ebc23b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80' }}
                        style={{ width: 60, height: 60, borderRadius: 30 }}
                    ></Image>
                </View>
                {/* <DrawerItemList> represents all screens which we have defined inside <Drawer.Navigator> inside <NavigationContainer>*/}
                <DrawerItemList {...props} />
                {/* Following are custom items we are adding as the drawer content. So in the drawer you will see there are total 4 items. 2 Drawer Screens(defined inside <Drawer.Navigator>) and 2 for following items*/}
                <DrawerItem label="Github" onPress={() => Linking.openURL('https://github.com')} />
                <DrawerItem label="Help" onPress={() => alert('Link to help')} />
            </DrawerContentScrollView>
            {/* Footer section */}
            <Footer />
            {/* You might be thiking why we added parent <View> here. We could have added {{flex: 1}} as style in <DrawerContentScrollView> and could have achieved the same(i.e. footer at the bootom of the page).
                Actually <DrawerContentScrollView> ends where the Drawer items ends. So even though we have applied {{position: 'absolute', bottom 20}} in the <Footer /> but it will still appear just below the 
                last drawer item and not at the bottom of the Drawer if we use <Footer /> inside <DrawerContentScrollView>. That's why created a parent <View> and kept <DrawerContentScrollView> and <Footer> both inside that.               
            */}
        </View>
    );
}

const CustomDrawerComponent = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                useLegacyImplementation
                drawerContent={
                    // (props) => <CustomDrawerContent {...props} />
                    (props) => <CustomDrawerContentWithHeaderAndFooter {...props} />
                }
            >
                <Drawer.Screen
                    name='Screen_A'
                    component={ScreenA}
                />
                <Drawer.Screen
                    name='Screen_B'
                    component={ScreenB}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default CustomDrawerComponent