import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import colors from "../assets/Styles/colors";

const PriceNow = ({ priceNow }) => {
  return (
    <View style={styles.container}>
      {priceNow != null ? (
        <View style={styles.priceNowView}>
          <Text style={styles.font}>Price right now</Text>
          <Text style={styles.priceNowText}>{(priceNow * 100).toFixed(2)}</Text>
          <Text style={styles.font}>öre/kwh</Text>
        </View>
      ) : (
        <Text>Loading</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#333138",
    borderRadius: 10,
    paddingVertical: 10,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  priceNowView: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  priceNowText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  font: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },
});

export default PriceNow;
