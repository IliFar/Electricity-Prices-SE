import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

const Navbar = ({ fontLoaded }) => {
  return (
    <View style={styles.navbarcontainer}>
      <Icon name="bars" size={25} color="white" />
      {fontLoaded ? (
        <Text style={styles.text}>Dashboard</Text>
      ) : (
        <Text>Loading...</Text>
      )}
      <Icon name="bell" size={25} color="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  navbarcontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    paddingTop: 20,
    backgroundColor: "black",
    height: 60,
  },
  text: {
    color: "white",
    fontSize: 20,
    fontFamily: "Roboto-Medium",
  },
});

export default Navbar;
