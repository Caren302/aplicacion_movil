import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View, Image, Alert, ScrollView } from 'react-native'
import { TextInput } from 'react-native-paper';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import {initializeApp} from 'firebase/app';
import { firebaseConfig} from '../firebase/firebase-config';

const LoginScreen = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name_p, setName_p] = useState('')
  const [adress, setAdress] = useState('')
  const [phone, setPhone] = useState('')
  const [useri, setUseri] = useState('')
  const navigation = useNavigation();

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
        Alert.alert('Por favor llene los campos')
        const user = userCredential.user;
    })
    .catch(error => {
        Alert.alert('Usuario creado')
    })
  }

  return (
    <ScrollView>
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
          label="Nombre"
          placeholder="Por favor ingrese su nombre completo"
          value={name_p}
          onChangeText={text => setName_p(text)}
          style={styles.input}
        />
        <TextInput
          label="Dirección"
          placeholder="Por favor ingrese su direccion"
          value={adress}
          onChangeText={text => setAdress(text)}
          style={styles.input} 
        />
        <TextInput
          label="Telefono"
          placeholder="Por favor ingrese su número telefónico"
          value={phone}
          onChangeText={text => setPhone(text)}
          style={styles.input}
        />
        <TextInput
          label="Usuario"
          placeholder="Por favor ingrese un nombre de Usuario"
          value={useri}
          onChangeText={text => setUseri(text)}
          style={styles.input}
        />
        <TextInput
          label="Email"
          placeholder="Por favor ingresa tu correo"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          label="Password"
          placeholder="Por favor ingresa una contraseña"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry 
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handCreateAccount}
          style={[styles.button, styles.buttonOutline]}>
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Login")}
          style={[styles.button, styles.buttonOutline]}>
          <Text style={styles.buttonOutlineText}>Login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
    </ScrollView>
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