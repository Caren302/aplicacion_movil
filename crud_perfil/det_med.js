import React, { useState, useEffect } from "react";
import { ListItem, Avatar } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import firebase from "../database/firebase";
import { TouchableOpacity, StyleSheet, Text, View, Image } from "react-native";

const ListMed = (props) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    firebase.db.collection("usuarios").onSnapshot((querySnapshot) => {
      const list = [];
      querySnapshot.docs.forEach((doc) => {
        const { nombre_med, presentacion, categoria, lote, sector, fecha_cad, cantidad } = doc.data();
        list.push({
          id: doc.id,
          nombre_med,
          presentacion,
          categoria,
          lote,
          sector,
          fecha_cad,
          cantidad
        });
      });
      setList(list);
    });
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.contimagen}>
        <Image source={require('../assets/reg.jpg')}
        style={styles.imagen} />
      </View>
      {list.map((lista) => {
        return (
          <ListItem
            key={lista.id}
            bottomDivider
            onPress={() => {
              props.navigation.navigate("DetMed", {
                listaId: lista.id,
              });
            }}
          >
            <ListItem.Chevron />
            <ListItem.Content>
              <ListItem.Title>{lista.nombre_med}</ListItem.Title>
              <ListItem.Subtitle>{lista.presentacion}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        );
      })}
      <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button}
        onPress={() => props.navigation.navigate("MediScreen")}>
          <Text>Agregar</Text>
        </TouchableOpacity>
        </View>
    </ScrollView>
  );
};

export default ListMed;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#81D4FA',
    width: '50%',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 20,
  },
  contimagen: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  imagen: {
    width:300, 
    height:300,
    borderRadius: 100,
    margin: 30
  }
});