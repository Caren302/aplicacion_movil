import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const MenuScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>Esta aplicación esta diseñado para que los usuarios, es decir, 
      ustedes, puedan hacer uso de ella, dando como resultado una mejora en cuanto 
      al control de medicamentos</Text>
    </View>
  )
}

export default MenuScreen

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#BBDEFB',
      flex: 1,
      justifyContent: 'center',
    alignItems: 'center',
    },
    textContainer: {
        alignItems: 'center',
        fontWeight: '700',
        fontSize: 25,
        justifyContent: 'center',
        margin: 50
    }
    })
