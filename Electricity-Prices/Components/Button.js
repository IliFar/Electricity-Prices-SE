import { Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "../assets/Styles/colors";

const Button = ({active, zone, handlePress }) => {
  return (
    <TouchableOpacity
      style={[styles.button, active === zone ? styles.buttonActive : null]}
      onPress={handlePress}
    >
      <Text
        style={[styles.buttonText, active == zone && styles.buttonTextActive]}
        
      >
        {zone}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexGrow: 1,
    backgroundColor: "rgba(255, 255, 255, 1)",
    paddingVertical: 10,
    borderColor: "black",
    borderWidth: 1,
  },
  firstButton: {
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderRightColor: "black",
    borderRightWidth: 1,
  },
  lastButton: {
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderLeftColor: "black",
    borderLeftWidth: 1,
  },
  buttonText: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonActive: {
    backgroundColor: "black",
  },
  buttonTextActive: {
    color: "white",
  },
});

export default Button;
