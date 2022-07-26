import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

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