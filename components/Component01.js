import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

/*
    To run this project first you need to install "Andriod studio" in your system and then follow these steps.
    While opening first time it may ask you for "Install Type", Select "Standard" as install type. Then press next-next 
    until you reach to finish button and finally press finish button.
    From the Android Studio Welcome screen, select 'More Actions' -> 'Virtual Device Manager'.
    Now press on "Create device" -> A new screen will open -> Choose a device like "Pixel 6" -> Finish setup.
    It will redirect you again on Virtual Device Manager screen(i.e. where "Create device" button was there). 
    Choose the device you created in previous step and click on play button.
    It will create and setup Andriod Emulator on your system. Now you can view your project by pressing "a" in your
    PC(i.e. system) terminal where you are running your react native project. 
    You can also use "expo url" printed on your screen to connect to Andriod emulator which seems like - exp://192.168.1.8:19000
    You can also use your andriod phone as emulator. For that You will just have to install and open "Expo Go" app on 
    your andriod app and in that app you can either scan the QR code printed on your terminal or use "expo url" to connect.


    How to open Debug menu in Andriod emulator :
    If you are running the android emulator on your PC then open your Android Emulator and press 'Command + M' 
    on macOS or 'Ctrl + M' on Linux and Windows from the PC keyboard. And if you are running the android emulator 
    on your android phone then just shake your phone and the Debug menu will be open.

*/

// Basic functionality, styling and calling a URL
const Component01 = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Programming with Aman</Text>
            {/* 
            <Button style={styles.button} title='My Youtube'></Button>
            The React Native Button is very limited in what you can do. It does not have a 
            style prop also. So you can't design a Button. Above we have defined style for 
            button but it is not working. So better option is TouchableOpacity.
            We can use TouchableOpacity as alternative to Button as follows :
            */}
            <TouchableOpacity
                style={styles.button}
                onPress={() => Linking.openURL('https://youtube.com/aajtak')}
            >
                <Text style={styles.text}>Youtube</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f56ff5',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 20,
        fontWeight: '700',
        fontStyle: 'italic',
        margin: 10
    },
    button: {
        backgroundColor: 'blue',
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 10

    }
});

export default Component01