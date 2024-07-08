import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const SalidScreen = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("Home")}>
        <Text>Pagina principal</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("MenuScreen")}>
        <Text>Menu</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("NotiScreen")}>
        <Text>Notificaciones</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("Login")}>
        <Text>Cerrar Sesion</Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default SalidScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    marginTop: 20,
  },
})
