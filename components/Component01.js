import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Basic functionality, styling and calling a URL
const Component01 = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headerWrapper}>
                <Text style={styles.header}>Hello World!</Text>
            </View>
            {/* 
            <Button style={styles.button} title='My Youtube'></Button>
            The React Native Button is very limited in what you can do. It does not have a 
            style prop also. So you can't design a Button. Above we have defined style for 
            button but it is not working. So better option is TouchableOpacity.
            We can use TouchableOpacity as alternative to Button as follows :
            */}
            <View style={styles.buttonWrapper}>
                <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://youtube.com/aajtak')}>
                    <Text style={styles.buttonText}>Youtube</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#27db60',
        paddingTop: 30,
    },
    headerWrapper: {
        backgroundColor: '#fc0341',
        alignItems: 'center',
        padding: 10
    },
    header: {
        color: 'white',
        fontSize: 22,
        fontWeight: '700'
        //For fontWeight using quotes in value is necessary otherwise your component will not render in android phones.
    },
    buttonWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '700',
        fontStyle: 'italic',
        margin: 10
    },
    button: {
        backgroundColor: '#fc0341',
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 10
    }
});

export default Component01
