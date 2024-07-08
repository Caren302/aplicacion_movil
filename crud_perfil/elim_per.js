import React, { useEffect, useState } from "react";
import { ScrollView, Button, View, Alert, ActivityIndicator, StyleSheet, } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import firebase from "../database/firebase";

const DetMed = (props) => {
  const initialState = {
    id: "",
    nombre_med: "",
    presentacion: "",
    categoria: "",
    lote: "",
    sector: "",
    fecha_cad: '',
    cantidad: ''
  };

  const [lista, setLista] = useState(initialState);
  const [loading, setLoading] = useState(true);

  const handleTextChange = (value, prop) => {
    setLista({ ...lista, [prop]: value });
  };

  const getListaById = async (id) => {
    const dbRef = firebase.db.collection("medicamentos").doc(id);
    const doc = await dbRef.get();
    const lista = doc.data();
    setLista({ ...lista, id: doc.id });
    setLoading(false);
  };

  const deleteLista = async () => {
    setLoading(true)
    const dbRef = firebase.db
      .collection("medicamentos")
      .doc(props.route.params.listId);
    await dbRef.delete();
    setLoading(false)
    props.navigation.navigate("ListMed");
  };

  const openConfirmationAlert = () => {
    Alert.alert(
      "Removing the List",
      "Are you sure?",
      [
        { text: "Yes", onPress: () => deleteLista() },
        { text: "No", onPress: () => console.log("canceled") },
      ],
      {
        cancelable: true,
      }
    );
  };

  const updateLista = async () => {
    const listaRef = firebase.db.collection("medicamentos").doc(lista.id);
    await listaRef.set({
      nombre_med: lista.nombre_med,
      presentacion: lista.presentacion,
      categoria: lista.categoria,
      lote: lista.lote,
      sector: lista.sector,
      fecha_cad: lista.fecha_cad,
      cantidad: lista.cantidad
    });
    setLista(initialState);
    props.navigation.navigate("ListMed");
  };

  useEffect(() => {
    getListaById(props.route.params.listaId);
  }, []);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#9E9E9E" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View>
        <TextInput
          placeholder="Nombre del medicamento"
          autoCompleteType="nombremed"
          style={styles.inputGroup}
          value={lista.nombre_med}
          onChangeText={(value) => handleTextChange(value, "nombre_med")}
        />
      </View>
      <View>
        <TextInput
          autoCompleteType="presentacion"
          placeholder="presentacion"
          style={styles.inputGroup}
          value={lista.presentacion}
          onChangeText={(value) => handleTextChange(value, "presentacion")}
        />
      </View>
      <View>
        <TextInput
          placeholder="categoria"
          autoCompleteType="categoria"
          style={styles.inputGroup}
          value={lista.categoria}
          onChangeText={(value) => handleTextChange(value, "categoria")}
        />
      </View>
      <View>
        <TextInput
          placeholder="lote"
          autoCompleteType="lote"
          style={styles.inputGroup}
          value={lista.lote}
          onChangeText={(value) => handleTextChange(value, "lote")}
        />
      </View>
      <View>
        <TextInput
          placeholder="sector"
          autoCompleteType="sector"
          style={styles.inputGroup}
          value={lista.sector}
          onChangeText={(value) => handleTextChange(value, "sector")}
        />
      </View>
      <View>
        <TextInput
          placeholder="Fecha de caducidad"
          autoCompleteType="fecha"
          style={styles.inputGroup}
          value={lista.fecha_cad}
          onChangeText={(value) => handleTextChange(value, "fecha_cad")}
        />
      </View>
      <View>
        <TextInput
          placeholder="Cantidad"
          autoCompleteType="cantidad"
          style={styles.inputGroup}
          value={lista.cantidad}
          onChangeText={(value) => handleTextChange(value, "cantidad")}
        />
      </View>
      <View style={styles.btn}>
        <Button
          title="Delete"
          onPress={() => openConfirmationAlert()}
          color="#E37399"
        />
      </View>
      <View>
        <Button title="Update" onPress={() => updateLista()} color="#19AC52" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  loader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  btn: {
    marginBottom: 7,
  },
});

export default DetMed;