import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import Navbar from "./Components/Navbar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import * as Font from "expo-font";

export default function App() {
  const [fontsLoaded, setfontsLoaded] = useState(false);

  const loadFonts = async() => {
    await Font.loadAsync({
      "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
      "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
      "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    })
    setfontsLoaded(true);
  }

  useEffect(() => {
    loadFonts();
  }, [])
  

  return (
    <SafeAreaProvider>
      <LinearGradient
        colors={["#D3D8FD", "#BBA6D9", "#CEBCDD"]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        locations={[0, 0.5, 1]}
        style={styles.gradient}
      >
        <SafeAreaView style={styles.container}>
          <View>
            <Navbar fontLoaded={fontsLoaded}/>
          </View>
          <View>
            {fontsLoaded ? <Text style={styles.text}>Hello</Text> : <Text>Loading...</Text>}
          </View>
        </SafeAreaView>
      </LinearGradient>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    fontFamily: "Roboto-Bold"
  },
  gradient: {
    flex: 1,
  },
  text: {
    
  },
});
