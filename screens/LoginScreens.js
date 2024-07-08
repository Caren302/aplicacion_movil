import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import { TextInput } from 'react-native-paper';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import {initializeApp} from 'firebase/app';
import { firebaseConfig} from '../firebase/firebase-config';

const LoginScreen = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigation = useNavigation();

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);


  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
        navigation.navigate('HomeScreen');
    })
    .catch(error => {
        console.log(error)
    })
  }

  

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
      <View style={styles.contimagen}>
        <Image source={require('../assets/doc.jpg')}
        style={styles.imagen} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          label="Email"
          placeholder="Por favor ingresa tu correo"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          label="Password"
          placeholder="Por favor ingresa tu contraseña"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry 
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleSignIn}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          onPress={() => props.navigation.navigate("RegiScreen")}
          style={[styles.button, styles.buttonOutline]}>
          <Text style={styles.buttonOutlineText}>Crear una Cuenta</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EDE7F6'
  },
  inputContainer: {
    width: '80%'
  },
  input: {
    backgroundColor: 'transparent',
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 10,
    borderRadius: 30,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#81D4FA',
    width: '100%',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#81D4FA',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 20,
  },
  buttonOutlineText: {
    color: '#0782F9',
    fontWeight: '700',
    fontSize: 16,
  },
  contimagen: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  imagen: {
    width:250, 
    height:250,
    borderRadius: 70,
  }
})