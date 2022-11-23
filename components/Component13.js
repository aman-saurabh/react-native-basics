import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'

//Image and ImageBackground

const Component13 = () => {
    return (
        <ImageBackground
            source={require('../assets/images/bg.jpg')}     //Same as we use in 'Image' tag
            style={styles.container}
        >
            <Text>Displaying Image</Text>
            {/* 
            Setting image size(width and height both) in image style is recommended and especially if you are using external 
            URI as source.Otherwise you might get error. If you only want to set width and want height in the same aspect 
            ratio as in original image then set height as '100%' in style and also set resizeMode as 'contain'.
            */}
            <Image
                style={styles.image}
                source={require('../assets/images/men.jpg')}
                // source={{ uri: 'https://images.unsplash.com/photo-1512950050685-b1d4ae63d2df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80' }}
                resizeMode='contain'
                blurRadius={3}  // We can use this to blus images
            />
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 35,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 300,
        height: '100%'
    }
})

export default Component13