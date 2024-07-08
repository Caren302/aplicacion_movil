import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import LoginScreens from './screens/LoginScreens';
import HomeScreen from './screens/HomeScreen';
import MediScreen from './screens/MediScreen';
import SettingScreen from './screens/SettingScreen';
import AddUserScreen from './screens/RegiScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import NotiScreen from './screens/NotiScreen';
import MenuScreen from './screens/MenuScreen';
import DetMed from "./medicamentos/DetMed";
import ListMed from "./medicamentos/ListMed";

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Panda() {
  return (
    <Tab.Navigator initialRouteName="Feed"
      activeColor="#e91e63"
      labelStyle={{ fontSize: 12 }}
      style={{ backgroundColor: 'tomato' }}>
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarLabel: 'Home', tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />),
      }} />
      <Tab.Screen name="Register" component={MediScreen} options={{
        tabBarLabel: 'Register', tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="clipboard-list-outline" color={color} size={26} />),
      }} />
      <Tab.Screen name="Settings" component={SettingScreen} options={{
        tabBarLabel: 'Settings', tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="cog" color={color} size={26} />),
      }} />
    </Tab.Navigator>
  );
}


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator style={styles.container}>
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreens} />
        <Stack.Screen options={{ headerShown: false }} name="RegiScreen" component={AddUserScreen} />
        <Stack.Screen options={{ headerShown: false }} name="HomeScreen" component={Panda} />
        <Stack.Screen name="NotiScreen" component={NotiScreen} />
        <Stack.Screen name="MenuScreen" component={MenuScreen} />
        <Stack.Screen name="ListMed" component={ListMed} options={{ title: "ListMed" }} />
        <Stack.Screen name="DetMed" component={DetMed} options={{ title: "DetMed" }} />
        <Stack.Screen name="MediScreen" component={MediScreen} options={{ title: "MediScreen" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow'
  }
})