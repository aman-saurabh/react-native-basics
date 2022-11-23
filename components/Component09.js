import React, { useState } from 'react'
import { Button, Pressable, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'

//Buttons and Touchables

const Component09 = () => {
  const [name, setName] = useState('');
  const [show, setShow] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Please Enter your name</Text>
      <TextInput
        style={styles.input}
        placeholder='e.g. Aman'
        onChangeText={(value) => setName(value)}
      />
      {/* <Button style={styles.button} title={show ? 'Hide Name' : 'Show Name'} onPress={() => setShow(!show)} color='#00fa21'/> */}

      <TouchableOpacity
        style={styles.button}
        onPress={() => setShow(!show)}
        disabled={name == '' && !show}
        activeOpacity={0.1}     
        //'activeOpacity' sets what will be the opacity of the 'TouchableOpacity' when it is clicked.
      >
        <Text style={styles.buttonText}>{show ? 'Hide Name' : 'Show Name'}</Text>
      </TouchableOpacity>

      {/* 'TouchableHighlight' is almost similar to 'TouchableOpacity' except for the fact that we can set a 'underlayColor' in it, which will be become the color of the button when button is clicked.*/}
      {/* <TouchableHighlight
        style={styles.button}
        onPress={() => setShow(!show)}
        activeOpacity={0.1}     //'activeOpacity' sets what will be the opacity of the 'TouchableOpacity' when it is clicked.
        underlayColor='#fa006c'
      >
        <Text style={styles.buttonText}>{show ? 'Hide Name' : 'Show Name'}</Text>
      </TouchableHighlight> */}

      {/* 'TouchableWithoutFeedback' is similar to 'TouchableOpacity' but by default it doesn't have any style and it doesn't support 
      'styles' and 'activeOpacity' property. But you can use <View> tag inside 'TouchableWithoutFeedback' and apply style on that.*/}
      {/* <TouchableWithoutFeedback
        onPress={() => setShow(!show)}
      >
        <View style={styles.button}>
          <Text style={styles.buttonText}>{show ? 'Hide Name' : 'Show Name'}</Text>
        </View>
      </TouchableWithoutFeedback> */}

      {show && (
        <Text style={styles.text}>Your name is : {name}</Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 35,
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 20
  },
  input: {
    borderWidth: 3,
    borderColor: '#fcba03',
    borderRadius: 5,
    fontSize: 20,
    width: 200,
    padding: 10,
    marginBottom: 20
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 25,
    borderRadius: 20,
    backgroundColor: '#00fa21'
  },
  buttonText: {
    color: 'white',
    fontSize: 25,
    fontWeight: '700'
  }
})

export default Component09