import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Navbar from "./Components/Navbar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import * as Font from "expo-font";
import Table from "./Components/Table";
import Regions from "./Components/Regions";
import Chart from "./Components/Chart";
import { fetchElectricityPrices } from "./Components/Api";
import { registerRootComponent } from "expo";

export default function App() {
  const zones = [
    { id: 0, name: "SE1" },
    { id: 1, name: "SE2" },
    { id: 2, name: "SE3" },
    { id: 3, name: "SE4" },
  ];
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
      "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
      "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    });
    setFontsLoaded(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor="black" style="light" />
      {/* <LinearGradient
        colors={["#D3D8FD", "#BBA6D9", "#CEBCDD"]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        locations={[0, 0.5, 1]}
        style={styles.gradient}
      > */}
      <SafeAreaView style={styles.container}>
        <View style={styles.navbarView}>
          <Navbar fontLoaded={fontsLoaded} />
          <Regions />
        </View>
      </SafeAreaView>
      {/* </LinearGradient> */}
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 10,
    fontFamily: "Roboto-Regular",
    gap: 10,
    backgroundColor: "#020122",
  },

  navbarView: {
    marginBottom: 10,
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
});
