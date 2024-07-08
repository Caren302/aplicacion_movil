import React, { useState } from "react";
import { TouchableOpacity, View, StyleSheet, Text, Image, ScrollView, KeyboardAvoidingView } from "react-native";
import { TextInput } from "react-native-paper";
import firebase from "../database/firebase";

const RegMed = (props) => {
  const initalState = {
    nombre_med: "",
    presentacion: "",
    categoria: "",
    lote: '',
    sector: '',
    fecha_cad: '',
  };

  const [state, setState] = useState(initalState);

  const handleChangeText = (value, nombre_med) => {
    setState({ ...state, [nombre_med]: value });
  };

  const saveNewUser = async () => {
    if (state.nombre_med === "") {
      alert("Por favor llena los campos");
    } else {

      try {
        await firebase.db.collection("medicamentos").add({
          nombre_med: state.nombre_med,
          presentacion: state.presentacion,
          categoria: state.categoria,
          lote: state.lote,
          sector: state.sector,
          fecha_cad: state.fecha_cad,
        });

        props.navigation.navigate("ListMed");
      } catch (error) {
        console.log(error)
      }
    }
  };

  return (
    <ScrollView>
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.contimagen}>
          <Image source={require('../assets/registro.gif')}
            style={styles.imagen} />
        </View>

        <View style={styles.inputGroup}>
          <TextInput
            label='Medicamento'
            placeholder="Nombre del medicamento"
            onChangeText={(value) => handleChangeText(value, "nombre_med")}
            value={state.nombre_med}
            style={styles.input}
          />
        </View>

        <View style={styles.inputGroup}>
          <TextInput
            label='Presentación'
            placeholder="Si el medicamento es en cápsula, pastilla, liquido..."
            onChangeText={(value) => handleChangeText(value, "presentacion")}
            value={state.presentacion}
            style={styles.input}
          />
        </View>

        <View style={styles.inputGroup}>
          <TextInput
            label='Categoria'
            placeholder="La categoria a la que pertenece el medicamento"
            onChangeText={(value) => handleChangeText(value, "categoria")}
            value={state.categoria}
            style={styles.input}
          />
        </View>

        <View style={styles.inputGroup}>
          <TextInput
            label='Lote'
            placeholder="Lote al que pertence el medicamento"
            onChangeText={(value) => handleChangeText(value, "lote")}
            value={state.lote}
            style={styles.input}
          />
        </View>

        <View style={styles.inputGroup}>
          <TextInput
            placeholder="Sector al que pertenece el medicamento"
            label='Sector'
            onChangeText={(value) => handleChangeText(value, "sector")}
            value={state.sector}
            style={styles.input}
          />
        </View>

        <View style={styles.inputGroup}>
          <TextInput
            placeholder="Fecha de caducidad"
            label='Caducidad'
            onChangeText={(value) => handleChangeText(value, "fecha_cad")}
            value={state.fecha_cad}
            style={styles.input}
          />
        </View>

        <View>
          <TouchableOpacity style={styles.button} title="Agregar" onPress={() => saveNewUser()} >
            <Text>Agregar</Text>
          </TouchableOpacity>
        </View>

        <View >
          <TouchableOpacity style={styles.button} title="Lista de medicamentos" onPress={() => props.navigation.navigate("ListMed")} >
            <Text>Lista de medicamentos</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputGroup: {
    width: '80%',
    flex: 1
  },
  input: {
    backgroundColor: 'transparent',
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 30,
    borderRadius: 30,
  },
  button: {
    backgroundColor: '#81D4FA',
    width: '100%',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 10,
    margin: 15
  },
  contimagen: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  imagen: {
    width: 300,
    height: 300,
    borderRadius: 70,
    margin: 15
  }
});

export default RegMed;
